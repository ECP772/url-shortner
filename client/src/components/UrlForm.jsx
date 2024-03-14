import { useState } from "react";
import axios from "axios";
function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [outputUrl, setOutputUrl] = useState("your code will appear here");
  const handleClick = async () => {
    const response = await axios.post(`http://localhost:3000/api/`, {
      longUrl: url,
    });
    const { shortUrl } = response.data;
    setOutputUrl(`http://localhost:3000/api/${shortUrl}`);
    console.log(outputUrl);
  };
  const handleClick2 = async () => {
    const response = await axios.get(`http://localhost:3000/api/${shortCode}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });

    const { longUrl } = response.data;
    window.open(longUrl, "_blank");
    console.log(longUrl);
  };
  return (
    <div>
      <input
        type="text"
        id="urlInput"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleClick}>Generate Short Link</button>
      <div>{outputUrl}</div>
      <div>
        <input
          type="text"
          id="urlInput"
          onChange={(e) => setShortCode(e.target.value)}
        />
        <button onClick={handleClick2}>Enter existing code</button>
      </div>
    </div>
  );
}

export default UrlForm;
