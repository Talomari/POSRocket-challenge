

[tal-validation-transaction]

```js

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
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install tal-validation-transaction
```

## Credits :
- [Tal Omari](https://github.com/Talomari) - Author.