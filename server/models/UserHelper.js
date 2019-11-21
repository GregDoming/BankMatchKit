const formDataArr = [
  "purchase",
  "refinance",
  "cashOutRefinance",
  "renovationImprovement",
  "bridge",
  "revolvingBusinessLOC1stPosition",
  "revolvingBusinessLOC2stPosition",
  "investmentPurchase",
  "investmentRefinance",
  "investmentCashOutRefinance",
  "investmentRenovationImprovement",
  "investmentBridge",
  "investmentRevolvingBusinessLOC1stPosition",
  "investmentRevolvingBusinessLOC2stPosition",
  "sbaExpress",
  "exoprtExpressWc",
  "internationalTrade",
  "seasonalCAPLines",
  "ownerOccupiedCommercial",
  "debtRefinance",
  "contractCAPLines",
  "buildersCAPLines",
  "workingCAPLines",
  "sbaMicroLoan",
  "businessAcquisition",
  "investment",
  "renovation",
  "residentialLongterm",
  "residentialFixandFlip",
  "groundUpSpecHome",
  "ownerUser",
  "tractHomes",
  "apartments",
  "constructiontoPermanent",
  "landDevelopment",
  "residential",
  "PUD",
  "purchaseWithLand",
  "entitlements",
  "miniperm",
  "leasedLand",
  "brokenProject",
  "manufacturedHomeSingleWide",
  "manufacturedHomeDoubleWide",
  "businessAcquisitionsMergers",
  "franchisePurchases",
  "revolvingBLOCFirstPosition",
  "revolvingBLOCSecondPosition",
  "accountsReceivable",
  "crossCollateral",
  "equipment",
  "invoiceFinancing",
  "irrevocableTrust",
  "projectionBased",
  "purchaseOrderFinancing",
  "realEstate",
  "stockSavings"
];

const formInfo = {};

const createFormObj = (dataArr) => {
  dataArr.forEach((ele) => {
    formInfo[ele] = {
      type: String,
      enum: ["YES", "UNKNOWN", "NO"],
      default: "UNKNOWN",
    }
  })
}

createFormObj(formDataArr);

module.exports = formInfo;