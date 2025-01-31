import express from "express";
import axios from "axios";

const app = express();
const port = 5000;

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://catfact.ninja/fact");
    res.render("index.ejs", {
      fact: result.data.fact, 
    });
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
