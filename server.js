const express = require("express");
const app = express();
let json = require("./transaction.json");


const { fileValidation ,taxValidation} = require("./index");
taxValidation(json)
.then(res=>{
  console.log(res)
})
.catch(err=>{
  console.log(err)
})
// fileValidation("transasction.json", __dirname + "/transaction.json")
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
//   .then(res => {
//     console.log("talaal response => ", res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// var fs = require("fs"),
//   xml2js = require("xml2js");
// var parser = new xml2js.Parser();
// fs.readFile(__dirname + "/transaction.xml", "utf8", function(err, data) {
//   console.log("check ==> ", data);
//   //   parser.parseString(data, function(err, result) {
//   //     console.dir(JSON.stringify(result));
//   //     console.log("Done");
//   //   });
// });
// fs.readFile('transaction.xml', "UTF-8", (data, error) => {
//     if (error) {
//         console.log(error)
//         return;
//     }
//     parseString(data, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('check the result ==> ', result)
//     })
// })
// const {taxValidation} = require('./index');

// taxValidation(json)
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
