import { customAlphabet } from "nanoid";
import { UrlMapping } from "../models/url.model.js";
const nanoid = customAlphabet("abcefghjklmno", 6);

const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    let urlMapping = await UrlMapping.findOne({ longUrl });
    if (urlMapping) {
      res.json({
        shortUrl: urlMapping.shortUrl,
      });
    } else {
      const shortUrl = nanoid();
      urlMapping = new UrlMapping({
        longUrl,
        shortUrl,
      });
      await urlMapping.save();
      res.json({ shortUrl });
    }
  } catch (error) {
    console.log(error);
  }
};
export { shortenUrl };
