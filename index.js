var fs = require("fs");
const parseStringSync = require("xml2js-parser").parseStringSync;

const fileValidation = async (fileName, pathFile) => {
  let extention = fileName.split(".")[1];
  if (extention === "json") {
    let fileJSON = await fs.readFileSync(pathFile, "utf8");
    let parseJSON = JSON.parse(fileJSON);
    let transaction = await taxValidation(parseJSON);
    return transaction;
  } else {
    let fileXML = await fs.readFileSync(pathFile, "utf8");
    let convertToJSON = await parseStringSync(fileXML);
    return taxValidation(convertToJSON.root);
  }
};

const taxValidation = transaction => {
  return new Promise((resolve, reject) => {
    try {
      let tax = transaction.tax_money;
      let collectedTaxAmount;
      if (Array.isArray(tax)) {
        collectedTaxAmount =
          parseFloat(transaction.total_collected_money[0].amount[0]) * 0.16;

        let taxAmount = parseFloat(tax[0].amount[0]);
        taxAmount === collectedTaxAmount ? resolve(true) : resolve(false);
      } else {
        collectedTaxAmount = transaction.total_collected_money.amount * 0.16;
        transaction.tax_money.amount === collectedTaxAmount
          ? resolve(true)
          : resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  fileValidation,
};
