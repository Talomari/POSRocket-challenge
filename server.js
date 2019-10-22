const express = require("express");
const app = express();

const { fileValidation } = require("./index");

app.listen(3000, () => {
  console.log("app listening on port 3000");
});

return fileValidation("transasction.json", __dirname + "/transaction.json")
  .then(res => {
    console.log("check the  response ==>>", res);
  })
  .catch(err => {
    console.log("check the error ==>", err);
  });
