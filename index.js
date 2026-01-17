const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App is live via Jenkins via Auto Deployment. 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
