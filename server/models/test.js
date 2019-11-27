
// const testObj = {
//   userProfile: {
//     firstName: '',
//     lastName: '',
//     secondaryEmailAddress: '',
//     workNumber: 0,
//     nameOfCompanylastName: '',
//     phoneNumber: 0,
//     companyPhoneNumber: 0,
//     fax: 0,
//     companyStreetAddress: '',
//     zip: 0,
//     personalNotes: '',
//     sourceName: '',
//     sourcePhone: '0',
//     sourceEmail: ''
//   },
//   ownerOccupied: {
//     purchase: 'YES',
//     refinance: 'UNKNOWN',
//     cashOutRefinance: 'UNKNOWN',
//     renovationImprovement: 'UNKNOWN',
//     bridge: 'UNKNOWN',
//     revolvingBusinessLOC1stPosition: 'UNKNOWN',
//     revolvingBusinessLOC2stPosition: 'UNKNOWN'
//   },
//   investmentNonSBARealEstate: {
//     investmentPurchase: 'UNKNOWN',
//     investmentRefinance: 'UNKNOWN',
//     investmentCashOutRefinance: 'UNKNOWN',
//     investmentRenovationImprovement: 'UNKNOWN',
//     investmentBridge: 'UNKNOWN',
//     investmentRevolvingBusinessLOC1stPosition: 'UNKNOWN',
//     investmentRevolvingBusinessLOC2stPosition: 'UNKNOWN'
//   },
//   sbaSevenALoans: {
//     sbaExpress: 'UNKNOWN',
//     exoprtExpressWC: 'UNKNOWN',
//     internationalTrade: 'UNKNOWN',
//     seasonalCAPLines: 'UNKNOWN',
//     ownerOccupiedCommercial: 'UNKNOWN',
//     debtRefinance: 'UNKNOWN',
//     contractCAPLines: 'UNKNOWN',
//     buildersCAPLines: 'UNKNOWN',
//     workingCAPLines: 'UNKNOWN',
//     sbaMicroLoan: 'UNKNOWN',
//     businessAcquisition: 'UNKNOWN'
//   },
//   construction: {
//     investment: 'UNKNOWN',
//     renovation: 'UNKNOWN',
//     residentialLongterm: 'UNKNOWN',
//     residentialFixandFlip: 'UNKNOWN',
//     groundUpSpecHome: 'UNKNOWN',
//     ownerUser: 'UNKNOWN',
//     tractHomes: 'UNKNOWN',
//     apartments: 'UNKNOWN',
//     constructiontoPermanent: 'UNKNOWN',
//     landDevelopment: 'UNKNOWN',
//     residential: 'UNKNOWN',
//     PUD: 'UNKNOWN',
//     purchaseWithLand: 'UNKNOWN',
//     entitlements: 'UNKNOWN',
//     miniperm: 'UNKNOWN',
//     leasedLand: 'UNKNOWN',
//     brokenProject: 'UNKNOWN',
//     manufacturedHomeSingleWide: 'UNKNOWN',
//     manufacturedHomeDoubleWide: 'UNKNOWN'
//   },
//   businessLendingNonSBA: {
//     businessCreditCard: 'UNKNOWN',
//     businessExpansionnoRE: 'UNKNOWN',
//     equipmentFinancing: 'UNKNOWN',
//     businessAcquisitionsMergers: 'UNKNOWN',
//     franchisePurchases: 'UNKNOWN',
//     revolvingBLOCFirstPosition: 'UNKNOWN',
//     revolvingBLOCSecondPosition: 'UNKNOWN',
//     accountsReceivable: 'UNKNOWN',
//     crossCollateral: 'UNKNOWN',
//     equipment: 'UNKNOWN',
//     invoiceFinancing: 'UNKNOWN',
//     irrevocableTrust: 'UNKNOWN',
//     projectionBased: 'UNKNOWN',
//     purchaseOrderFinancing: 'UNKNOWN',
//     realEstate: 'UNKNOWN',
//     stockSavings: 'UNKNOWN'
//   },
//   nonCommercialResidentialLending: {
//     conventionalFNMA: 'UNKNOWN',
//     governmentFHA: 'UNKNOWN',
//     kRehab: 'UNKNOWN',
//     portfolio: 'UNKNOWN',
//     jumbo: 'UNKNOWN'
//   },
// }


// const emptyState = {};
// const convertState = (obj) => {
//   for (let key in obj){
//     if (obj.hasOwnProperty(key)){
//       if (typeof obj[key] === "object") {
//         console.log(typeof obj[key])
//         convertState(obj[key])
//       };
//       console.log("bottom")
//       console.log(typeof obj[key])

//       // if (typeof obj[key] !== "object") emptyState[key] = obj[key];
//     }
//  }
//  return
// };
// convertState(testObj)
// console.log(emptyState)