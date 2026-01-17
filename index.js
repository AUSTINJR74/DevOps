const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Devops Capstone Project is Live: Local -> Github -> Jenkins -> Docker Hub -> Prometheus -> Grafana 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
