import fs from "fs";
import { join } from "path";
import grayMatter from "gray-matter";
import remark from "remark";
import remarkHTML from "remark-html";
import markdownToTxt from "markdown-to-txt";
import slugify from "slugify";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function markdownToHtml(markdown) {
  const htmlContent = remark().use(remarkHTML).processSync(markdown).toString();

  return htmlContent;
}

export function markdownToText(markdown) {
  const txtContent = markdownToTxt(markdown);

  return txtContent;
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = grayMatter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = markdownToHtml(content || "");
    }

    if (field === "thumbnail") {
      const baseUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://kethlyn-saibert.vercel.app";

      const imageURL = `${baseUrl}${data.coverImage}`;

      items[field] = `/api/thumbnail.png?background=${imageURL}`;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));

  return posts;
}

export function getPostsByTag(slugifyTag, fields) {
  const posts = getAllPosts(["tags", ...fields]);

  let noSlugifyTag = "";

  const postsFiltered = posts.filter((post) => {
    const hasTag = post.tags.map((tag) => {
      if (slugify(tag, { lower: true }) === slugifyTag) {
        noSlugifyTag = tag;

        return true;
      }
      return false;
    });

    if (hasTag.includes(true)) {
      return post;
    }
  });

  return { posts: postsFiltered, tag: noSlugifyTag };
}
