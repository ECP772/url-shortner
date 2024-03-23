import { UrlMapping } from "../models/url.model.js";
const redirectToLongURL = async (req, res) => {
  const { shortCode } = req.params;

  try {
    // Find the URLMapping document with the given short code
    const urlMapping = await UrlMapping.findOne({ shortUrl: shortCode });
    console.log("Query:", { shortCode });
    console.log("Result:", urlMapping);

    if (urlMapping) {
      // Redirect the user to the long URL associated with the short code
      console.log(shortCode);
      console.log(urlMapping.longUrl);
      res.redirect(`${urlMapping.longUrl}`);
      // res.json({ longUrl: urlMapping.longUrl });
    } else {
      // If no URLMapping document is found, return a 404 Not Found response
      res.status(404).json({ error: "Short URL not found" });
    }
  } catch (error) {
    // Handle any errors and return a 500 Internal Server Error response
    console.error("Error redirecting URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { redirectToLongURL };
