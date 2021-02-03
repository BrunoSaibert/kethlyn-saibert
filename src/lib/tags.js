import slugify from "slugify";

import { getAllPosts } from "./posts";

export function getAllTags() {
  const posts = getAllPosts(["tags"]);

  const allTags = [];

  posts.map(({ tags }) => {
    return tags.map((tag) => {
      return allTags.push(tag);
    });
  });

  const shortTags = allTags.sort();

  const countTags = shortTags.reduce(
    (accumulator, currentValue) => (
      (
        accumulator[
          accumulator.findIndex((item) => item.value === currentValue)
        ] ||
        accumulator[
          accumulator.push({
            value: currentValue,
            slug: slugify(currentValue, { lower: true }),
            count: 0,
          }) - 1
        ]
      ).count++,
      accumulator
    ),
    []
  );

  return countTags;
}
