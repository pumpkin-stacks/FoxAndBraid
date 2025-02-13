import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

console.log("Drive ID: ", process.env.DRIVE_ID)
console.log("API KEY: ", process.env.API_KEY)
// This Google API stuff can stay in here, the controller file 
// google repository details
const googleAPIAddress = "https://www.googleapis.com/drive/v3/files?q='";
const filterParams = "'+in+parents+and+(mimeType='image/jpeg'+or+mimeType='image/png')&key="
const googleAPITrailer = "=[YOUR_API_KEY]"
const directoryId = process.env.DRIVE_ID;
const token = process.env.API_KEY;

// new controller
export const portfolioController = {
  getGalleryImages: async (req, res) => {
      try {
          const response = await axios.get(
              `${googleAPIAddress}${directoryId}${filterParams}${token}` // Include webContentLink
          );

          const images = response.data.files.map(file => ({
            id: file.id,
            name: file.name,
            url: `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${token}`
        }));// Handle cases where 'files' might be undefined

          // Return metadata for client to then request the image itself
          res.json(images);

      } catch (error) {
          console.error("Error fetching image list from Google Drive:", error.response ? error.response.data : error.message); // More detailed error info
          res.status(500).json({ error: "Error fetching image list.", details: error.response ? error.response.data : error.message }); // Send JSON error response
      }
  },
  getImage: async (req, res) => {
      try {
          const fileId = req.params.fileId;
          const imageResponse = await axios.get(
              `${googleAPIAddress}${fileId}?alt=media&key=${token}`,
              { responseType: 'stream' } // Important: Get the response as a stream
          );

          res.setHeader('Content-Type', imageResponse.headers['content-type']); // Set the correct content type
          imageResponse.data.pipe(res); // Pipe the image stream directly to the client
      } catch (error) {
          console.error("Error fetching image from Google Drive:", error.response ? error.response.data : error.message);
          res.status(500).json({ error: "Error fetching image.", details: error.response ? error.response.data : error.message });
      }
  },
};


// Old controller

// export const portfolioController = {
//         getGalleryImages: async (req, res) => {
//   try {
//     const response = await axios.get(
//       `${googleAPIAddress}${directoryId}+in+parents&key=${token}&fields=files(id,name,mimeType)`
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching image list from Google Drive:", error);
//     res.status(500).send("Error fetching image list.");
//   }
// }







// };
