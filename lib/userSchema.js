const userSchema = {
  userProfile: {
    firstName: '',
    lastName: '',
    secondaryEmailAddress: '',
    workNumber: 0,
    nameOfCompanylastName: '',
    phoneNumber: 0,
    companyPhoneNumber: 0,
    fax: 0,
    companyStreetAddress: '',
    zip: 0,
    personalNotes: '',
    sourceName: '',
    sourcePhone: '0',
    sourceEmail: ''
  },
  ownerOccupied: {
    purchase: 'YES',
    refinance: 'UNKNOWN',
    cashOutRefinance: 'UNKNOWN',
    renovationImprovement: 'UNKNOWN',
    bridge: 'UNKNOWN',
    revolvingBusinessLOC1stPosition: 'UNKNOWN',
    revolvingBusinessLOC2stPosition: 'UNKNOWN'
  },
  investmentNonSBARealEstate: {
    investmentPurchase: 'UNKNOWN',
    investmentRefinance: 'UNKNOWN',
    investmentCashOutRefinance: 'UNKNOWN',
    investmentRenovationImprovement: 'UNKNOWN',
    investmentBridge: 'UNKNOWN',
    investmentRevolvingBusinessLOC1stPosition: 'UNKNOWN',
    investmentRevolvingBusinessLOC2stPosition: 'UNKNOWN'
  },
  sbaSevenALoans: {
    sbaExpress: 'UNKNOWN',
    exoprtExpressWC: 'UNKNOWN',
    internationalTrade: 'UNKNOWN',
    seasonalCAPLines: 'UNKNOWN',
    ownerOccupiedCommercial: 'UNKNOWN',
    debtRefinance: 'UNKNOWN',
    contractCAPLines: 'UNKNOWN',
    buildersCAPLines: 'UNKNOWN',
    workingCAPLines: 'UNKNOWN',
    sbaMicroLoan: 'UNKNOWN',
    businessAcquisition: 'UNKNOWN'
  },
  construction: {
    investment: 'UNKNOWN',
    renovation: 'UNKNOWN',
    residentialLongterm: 'UNKNOWN',
    residentialFixandFlip: 'UNKNOWN',
    groundUpSpecHome: 'UNKNOWN',
    ownerUser: 'UNKNOWN',
    tractHomes: 'UNKNOWN',
    apartments: 'UNKNOWN',
    constructiontoPermanent: 'UNKNOWN',
    landDevelopment: 'UNKNOWN',
    residential: 'UNKNOWN',
    PUD: 'UNKNOWN',
    purchaseWithLand: 'UNKNOWN',
    entitlements: 'UNKNOWN',
    miniperm: 'UNKNOWN',
    leasedLand: 'UNKNOWN',
    brokenProject: 'UNKNOWN',
    manufacturedHomeSingleWide: 'UNKNOWN',
    manufacturedHomeDoubleWide: 'UNKNOWN'
  },
  businessLendingNonSBA: {
    businessCreditCard: 'UNKNOWN',
    businessExpansionnoRE: 'UNKNOWN',
    equipmentFinancing: 'UNKNOWN',
    businessAcquisitionsMergers: 'UNKNOWN',
    franchisePurchases: 'UNKNOWN',
    revolvingBLOCFirstPosition: 'UNKNOWN',
    revolvingBLOCSecondPosition: 'UNKNOWN',
    accountsReceivable: 'UNKNOWN',
    crossCollateral: 'UNKNOWN',
    equipment: 'UNKNOWN',
    invoiceFinancing: 'UNKNOWN',
    irrevocableTrust: 'UNKNOWN',
    projectionBased: 'UNKNOWN',
    purchaseOrderFinancing: 'UNKNOWN',
    realEstate: 'UNKNOWN',
    stockSavings: 'UNKNOWN'
  },
  nonCommercialResidentialLending: {
    conventionalFNMA: 'UNKNOWN',
    governmentFHA: 'UNKNOWN',
    kRehab: 'UNKNOWN',
    portfolio: 'UNKNOWN',
    jumbo: 'UNKNOWN'
  }
};

const userObj = {
  PUD: "UNKNOWN",
  accountsReceivable: "UNKNOWN",
  apartments: "UNKNOWN",
  avatar: "/static/images/profile-image.jpg",
  bridge: "UNKNOWN",
  brokenProject: "UNKNOWN",
  buildersCAPLines: "UNKNOWN",
  businessAcquisition: "UNKNOWN",
  businessAcquisitionsMergers: "UNKNOWN",
  businessCreditCard: "UNKNOWN",
  businessExpansionnoRE: "UNKNOWN",
  cashOutRefinance: "UNKNOWN",
  companyPhoneNumber: 0,
  companyStreetAddress: "",
  constructiontoPermanent: "UNKNOWN",
  contractCAPLines: "UNKNOWN",
  conventionalFNMA: "UNKNOWN",
  crossCollateral: "UNKNOWN",
  debtRefinance: "UNKNOWN",
  email: "lolu5@gmail.com",
  entitlements: "UNKNOWN",
  equipment: "UNKNOWN",
  equipmentFinancing: "UNKNOWN",
  exoprtExpressWC: "UNKNOWN",
  fax: 0,
  firstName: "",
  franchisePurchases: "UNKNOWN",
  governmentFHA: "UNKNOWN",
  groundUpSpecHome: "UNKNOWN",
  internationalTrade: "UNKNOWN",
  investment: "UNKNOWN",
  investmentBridge: "UNKNOWN",
  investmentCashOutRefinance: "UNKNOWN",
  investmentPurchase: "UNKNOWN",
  investmentRefinance: "UNKNOWN",
  investmentRevolvingBusinessLOC1stPosition: "UNKNOWN",
  investmentRevolvingBusinessLOC2stPosition: "UNKNOWN",
  invoiceFinancing: "UNKNOWN",
  irrevocableTrust: "UNKNOWN",
  jumbo: "UNKNOWN",
  kRehab: "UNKNOWN",
  landDevelopment: "UNKNOWN",
  lastName: "",
  leasedLand: "UNKNOWN",
  manufacturedHomeDoubleWide: "UNKNOWN",
  manufacturedHomeSingleWide: "UNKNOWN",
  miniperm: "UNKNOWN",
  nameOfCompanylastName: "",
  ownerOccupiedCommercial: "UNKNOWN",
  ownerUser: "UNKNOWN",
  password: "$2b$10$RBqbvtUiSE5fKF0vGwk7OeV98yHb4O7XWgKSDJeuGVD04jgY.dKFK",
  personalNotes: "",
  phoneNumber: 0,
  portfolio: "UNKNOWN",
  projectionBased: "UNKNOWN",
  purchase: "YES",
  purchaseOrderFinancing: "UNKNOWN",
  purchaseWithLand: "UNKNOWN",
  realEstate: "UNKNOWN",
  refinance: "UNKNOWN",
  renovation: "UNKNOWN",
  renovationImprovement: "UNKNOWN",
  residential: "UNKNOWN",
  residentialFixandFlip: "UNKNOWN",
  residentialLongterm: "UNKNOWN",
  revolvingBLOCFirstPosition: "UNKNOWN",
  revolvingBLOCSecondPosition: "UNKNOWN",
  revolvingBusinessLOC1stPosition: "UNKNOWN",
  revolvingBusinessLOC2stPosition: "UNKNOWN",
  sbaExpress: "UNKNOWN",
  sbaMicroLoan: "UNKNOWN",
  seasonalCAPLines: "UNKNOWN",
  secondaryEmailAddress: "",
  sourceEmail: "",
  sourceName: "",
  sourcePhone: "0",
  stockSavings: "UNKNOWN",
  tractHomes: "UNKNOWN",
  updatedAt: "2019-11-22T12:09:53.490Z",
  userName: "lolu5",
  workNumber: 0,
  workingCAPLines: "UNKNOWN",
  zip: 0,
  __v: 0,
  _id: "5dd7acd261d7a94423cdb935"
};

export const convertUser = obj => {
  const what = {};
  let tempKey = "";

  const inner = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          tempKey = key;
          inner(obj[key]);
        }
        if (typeof obj[key] !== "object") {
          if (!what[tempKey]) what[tempKey] = {};
          what[tempKey][key] = obj[key]
        }
      }
    }
  };
  inner(obj);
  return what;
};

