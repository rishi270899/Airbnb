const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/AIRBNB";

main()
  .then(() => {
    console.log("connect to DB");
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("hello this is home page starting page");
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
 