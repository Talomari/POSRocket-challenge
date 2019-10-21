var fs = require("fs"),
  xml2js = require("xml2js");
var parser = new xml2js.Parser();

const fileValidation = (fileName, pathFile) => {
  let extention = fileName.split(".")[1];
  if (extention === "json") {
    fs.readFile(pathFile, "utf8", function(err, transaction) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      return new Promise((resolve, reject) => {
        return resolve(transaction);
        if (
          transaction[tax_money].amount ===
          transaction.total_collected_money.amount * 0.16
        ) {
          return resolve(transaction);
        } else {
          if (
            transaction.tax_money.amount >
            transaction.total_collected_money.amount * 0.16
          ) {
            returnreject(
              new Error(
                "Tax money amount bigger than collected money amount, and dose not equaled "
              )
            );
          } else {
            return reject(
              new Error(
                "Tax money amount less than collected money amount, and dose not equaled "
              )
            );
          }
        }
      });
    });
  } else {
    // do somthinig
    return extention;
  }
};

const taxValidation = transaction => {
  return new Promise((resolve, reject) => {
    resolve(transaction);
    if (
      transaction[tax_money].amount ===
      transaction.total_collected_money.amount * 0.16
    ) {
      resolve(transaction);
    } else {
      if (
        transaction.tax_money.amount >
        transaction.total_collected_money.amount * 0.16
      ) {
        reject(
          new Error(
            "Tax money amount bigger than collected money amount, and dose not equaled "
          )
        );
      } else {
        reject(
          new Error(
            "Tax money amount less than collected money amount, and dose not equaled "
          )
        );
      }
    }
  });
};

module.exports = {
  fileValidation,
  taxValidation
};
