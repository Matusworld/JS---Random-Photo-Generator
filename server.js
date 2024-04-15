import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/image-gen", async (req, res) => {
  try {
    // Fixed width and height
    const width = 1024;
    const height = 1024;

    const category = req.body.category;

    const response = await axios.get(
      "https://api.api-ninjas.com/v1/randomimage",
      {
        headers: {
          "X-Api-Key": process.env.NINJASAPI,
          Accept: "image/jpg",
        },
        params: {
          category,
          width,
          height,
        },
        responseType: "arraybuffer",
      }
    );

    // convert image data to base64
    const base64image = Buffer.from(response.data, "binary").toString("base64");
    const imageUrl = `data:image/jpeg;base64,${base64image}`;

    res.send({ image: imageUrl });
  } catch (error) {
    console.error("API request failed: ", error);
    res.status(500).send("Failed to fetch image from the API");
  }
});

app.listen(8080, () => {
  console.log("make art on http://localhost:8080/image-gen");
});
