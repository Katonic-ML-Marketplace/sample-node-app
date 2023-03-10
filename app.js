const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log(`Application is running on PORT ${process.env.PORT}`);
});
