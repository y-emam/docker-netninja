const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    fuck: "fuck",
  });
});

app.listen(3000, () => {
  console.log("Lisetning on port 3000");
});
