const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app
  .get("/", async (req, res) => {
    let valeur = req.query.valeur;

    const response = await axios.get(
      `https://api.deezer.com/search?q=${valeur}`
    );
 res.send(response.data)
  
  })
  .listen(200, () => {
    console.log("http://localhost:200");
  });
