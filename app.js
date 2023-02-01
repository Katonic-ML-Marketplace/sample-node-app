const express = require("express");

const app = express();

app.use(express.static('public'))

app.listen(8050, () => {
  console.log("Application is running on PORT:8050");
});
