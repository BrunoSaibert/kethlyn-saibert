import getThumbnailTemplate from "./_lib/thumTemplate";
import { getScreenshot } from "./_lib/chromium";

const isDev = !process.env.AWS_REGION;

export default async function (req, res) {
  try {
    const background = req.query.background;

    if (!background) {
      throw new Error("Background is required");
    }

    const html = getThumbnailTemplate({ background });

    const file = await getScreenshot(html, isDev);

    res.statusCode = 200;

    res.setHeader("Content-Type", `image/png`);
    res.setHeader(
      "Cache-Control",
      "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
    );

    return res.end(file);
  } catch (err) {
    console.error(err);

    return res.status(500).send("Internal Server Error");
  }
}
