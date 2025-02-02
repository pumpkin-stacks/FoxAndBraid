// server.js requirements
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

// server.js workpackage variables
const app = express();

// google repository details
const directoryId = process.env.DRIVE_ID;
const googleAPIAddress = "https://www.googleapis.com/drive/v3/files?q=";
const token = process.env.API_KEY;
const port = process.env.PORT;

//enable cors to bypass browser image blocking
app.use(cors());

app.get("/gallery-images", async (req, res) => {
  try {
    const response = await axios.get(
      `${googleAPIAddress}${directoryId}+in+parents&key=${token}&fields=files(id,name,mimeType)`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching image list from Google Drive:", error);
    res.status(500).send("Error fetching image list.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
