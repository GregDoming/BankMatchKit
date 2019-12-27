export const convertUser = flatUserObj => {
  // Anytime new fields are added to the form with user information the userSchema MUST be updated for those values to be saved.
  // at least at the top level
  const userSchema = {
    userProfile: {
      firstName: "",
      lastName: "",
      secondaryEmailAddress: "",
      workNumber: "",
      nameOfCompany: "",
      lastName: "",
      phoneNumber: "",
      companyPhoneNumber: "",
      fax: "",
      companyStreetAddress: "",
      zip: "",
      city: "",
      personalNotes: "",
      sourceName: "",
      sourcePhone: "",
      sourceEmail: "",
      clientPaysBrokerDemand: false,
      lenderPaysRebates: false,
      brokerPaidThroughEscrow: false,
      companyState: "",
      lenderNameBank: false,
      lenderNameCDFI: false,
      lenderNameCreditUnion: false,
      lenderNameInsuranceCompany: false,
      lenderNameNonBankLender: false,
      lenderNamePrivateEquity: false
    },
    ownerOccupied: {
      purchase: "UNKNOWN",
      refinance: "UNKNOWN",
      cashOutRefinance: "UNKNOWN",
      renovationImprovement: "UNKNOWN",
      bridge: "UNKNOWN",
      revolvingBusinessLOC1stPosition: "UNKNOWN",
      revolvingBusinessLOC2stPosition: "UNKNOWN",
      ownerMaxLTVPercent: 0,
      ownerMaximumLoanAmount: 0,
      ownerMinDCR: 0,
      ownerMinumumLoanAmount: 0
    },
    investmentNonSBARealEstate: {
      investmentPurchase: "UNKNOWN",
      investmentRefinance: "UNKNOWN",
      investmentCashOutRefinance: "UNKNOWN",
      investmentRenovationImprovement: "UNKNOWN",
      investmentBridge: "UNKNOWN",
      investmentRevolvingBusinessLOC1stPosition: "UNKNOWN",
      investmentRevolvingBusinessLOC2stPosition: "UNKNOWN",
      investmentNonSBAMaxARV: 0,
      investmentNonSBAMaxLTCPercent: 0,
      investmentNonSBAMaxLTVPercent: 0,
      investmentNonSBAMaximumLoanAmount: 0,
      investmentNonSBAMinDCR: 0,
      investmentNonSBAMinDebtYield: 0,
      investmentNonSBAMinumumLoanAmount: 0
    },
    sbaSevenALoans: {
      sbaExpress: "UNKNOWN",
      exoprtExpressWC: "UNKNOWN",
      internationalTrade: "UNKNOWN",
      seasonalCAPLines: "UNKNOWN",
      ownerOccupiedCommercial: "UNKNOWN",
      debtRefinance: "UNKNOWN",
      contractCAPLines: "UNKNOWN",
      buildersCAPLines: "UNKNOWN",
      workingCAPLines: "UNKNOWN",
      sbaMicroLoan: "UNKNOWN",
      businessAcquisition: "UNKNOWN",
      SBASevenMaxLTVPercent: 0,
      SBASevenMaximumLoanAmount: 0,
      SBASevenMinDCR: 0,
      SBASevenMinumumLoanAmount: 0
    },
    SBAFiveFourLoans: {
      SBAFiveFourFirstDeedEquipmentBridge: "UNKNOWN",
      SBAFiveFourFirstDeedRealEquipment: "UNKNOWN",
      SBAFiveFourFirstDeedRealEstate: "UNKNOWN",
      SBAFiveFourFirstDeedRealEstateBridge: "UNKNOWN",
      SBAFiveFourMaxLTVPercent: 0,
      SBAFiveFourMaximumLoanAmount: 0,
      SBAFiveFourMinDCR: 0,
      SBAFiveFourMinumumLoanAmount: 0,
      SBAFiveFourRefinanceBridge: "UNKNOWN",
      SBAFiveFourRefinanceProgram: "UNKNOWN"
    },
    construction: {
      investment: "UNKNOWN",
      renovation: "UNKNOWN",
      residentialLongterm: "UNKNOWN",
      residentialFixandFlip: "UNKNOWN",
      groundUpSpecHome: "UNKNOWN",
      ownerUser: "UNKNOWN",
      tractHomes: "UNKNOWN",
      apartments: "UNKNOWN",
      constructiontoPermanent: "UNKNOWN",
      landDevelopment: "UNKNOWN",
      residential: "UNKNOWN",
      PUD: "UNKNOWN",
      purchaseWithLand: "UNKNOWN",
      entitlements: "UNKNOWN",
      miniperm: "UNKNOWN",
      leasedLand: "UNKNOWN",
      brokenProject: "UNKNOWN",
      manufacturedHomeSingleWide: "UNKNOWN",
      manufacturedHomeDoubleWide: "UNKNOWN",
      constructionMaxLTCPercent: 0,
      constructionMaxLTVPercent: 0,
      constructionMaximumLoanAmount: 0,
      constructionMinDCR: 0,
      constructionMinumumLoanAmount: 0,
      constructionNonSBAMaxARV: 0
    },
    businessLendingNonSBA: {
      businessCreditCard: "UNKNOWN",
      businessExpansionnoRE: "UNKNOWN",
      equipmentFinancing: "UNKNOWN",
      businessAcquisitionsMergers: "UNKNOWN",
      franchisePurchases: "UNKNOWN",
      revolvingBLOCFirstPosition: "UNKNOWN",
      revolvingBLOCSecondPosition: "UNKNOWN",
      accountsReceivable: "UNKNOWN",
      crossCollateral: "UNKNOWN",
      equipment: "UNKNOWN",
      invoiceFinancing: "UNKNOWN",
      irrevocableTrust: "UNKNOWN",
      projectionBased: "UNKNOWN",
      purchaseOrderFinancing: "UNKNOWN",
      realEstate: "UNKNOWN",
      stockSavings: "UNKNOWN",
      businessLendingMaxLTVPercent: 0,
      businessLendingMaximumLoanAmount: 0,
      businessLendingMinDCR: 0,
      businessLendingMinumumLoanAmount: 0
    },
    nonCommercialResidentialLending: {
      conventionalFNMA: "UNKNOWN",
      governmentFHA: "UNKNOWN",
      kRehab: "UNKNOWN",
      portfolio: "UNKNOWN",
      jumbo: "UNKNOWN"
    },
    privateMoneyLending: {
      privateMoneyAdjustableRateAmortized: "UNKNOWN",
      privateMoneyFeesFlatMax: 0,
      privateMoneyFeesFlatMin: 0,
      privateMoneyFeesPointsMin: 0,
      privateMoneyFeesPointsMax: 0,
      privateMoneyFixedRateAmortized: "UNKNOWN",
      privateMoneyInterestRateMax: 0,
      privateMoneyInterestRateMin: 0,
      privateMoneyMaxARVCommercial: 0,
      privateMoneyMaxARVResidential: 0,
      privateMoneyMaxLTVPercentCommercial: 0,
      privateMoneyMaxLTVPercentResidential: 0,
      privateMoneyMaximumLoanAmount: 0,
      privateMoneyMinumumLoanAmount: 0,
      privateClosingCostsMin: 0,
      privateClosingCostsMax: 0,
      privateMoneyTermRangeMax: 0,
      privateMoneyTermRateMin: 0,
      privateDaysToFundingMin: 0,
      privateDaysToFundingMax: 0,
      privateMoneyinterestOnly: "UNKNOWN"
    },
    multiUnitLiving: {
      multiUnitAssisstedLiving: "UNKNOWN",
      multiUnitCondoTownHome: "UNKNOWN",
      multiUnitFraternitySorority: "UNKNOWN",
      multiUnitHotelMotelFlag: "UNKNOWN",
      multiUnitHotelMotelNoFlag: "UNKNOWN",
      multiUnitMobileHomePark: "UNKNOWN",
      multiUnitMultiFamily: "UNKNOWN",
      multiUnitStudentHousing: "UNKNOWN"
    },
    automotive: {
      automotiveBodyShop: "UNKNOWN",
      automotiveCarWash: "UNKNOWN",
      automotiveDealerShip: "UNKNOWN",
      automotiveGasStation: "UNKNOWN"
    },
    healthcare: {
      healthcareDoctorsOffice: "UNKNOWN",
      healthcareHospital: "UNKNOWN",
      healthcareMedicalLab: "UNKNOWN"
    },
    retail: {
      retailMall: "UNKNOWN",
      retailRestaurant: "UNKNOWN",
      retailSingleTenant: "UNKNOWN"
    },
    miscellaneous: {
      miscellaneousChurchReligion: "UNKNOWN",
      miscellaneousEntertainment: "UNKNOWN",
      miscellaneousFarmAgriculture: "UNKNOWN",
      miscellaneousIndustrialWarehouse: "UNKNOWN",
      miscellaneousLeaseholdProperty: "UNKNOWN",
      miscellaneousMaritimeMarina: "UNKNOWN",
      miscellaneousMixedUse: "UNKNOWN",
      miscellaneousOffice: "UNKNOWN",
      miscellaneousRawLand: "UNKNOWN",
      miscellaneousStorage: "UNKNOWN"
    },
    financialCreditIssue: {
      financialCreditIssueBankruptcy: "UNKNOWN",
      financialCreditIssueForeclosure: "UNKNOWN",
      financialCreditIssueJudgements: "UNKNOWN",
      financialCreditIssueLowFICO: "UNKNOWN",
      financialCreditIssueLowLiquidity: "UNKNOWN",
      financialCreditIssueMissedPayments: "UNKNOWN",
      financialCreditIssueNonUSCitizen: "UNKNOWN",
      financialCreditIssueShortSale: "UNKNOWN",
      financialCreditIssueTaxLiens: "UNKNOWN"
    },
    miscellaneousQualifiers: {
      miscellaneousQualifiersAssestBasedLending: "UNKNOWN",
      miscellaneousQualifiersCannabisRelated: "UNKNOWN",
      miscellaneousQualifiersExchange: "UNKNOWN",
      miscellaneousQualifiersFactoring: "UNKNOWN",
      miscellaneousQualifiersFirstLienPosition: "UNKNOWN",
      miscellaneousQualifiersInterestOnlyIndefinite: "UNKNOWN",
      miscellaneousQualifiersInterestOnlyIntoTerm: "UNKNOWN",
      miscellaneousQualifiersNonProfit: "UNKNOWN",
      miscellaneousQualifiersNonRecourse: "UNKNOWN",
      miscellaneousQualifiersRelationshipPricing: "UNKNOWN",
      miscellaneousQualifiersRequiredDepositRelationship: "UNKNOWN",
      miscellaneousQualifiersResidentialBridge: "UNKNOWN",
      miscellaneousQualifiersSecondLientPosition: "UNKNOWN",
      miscellaneousQualifiersStartUp: "UNKNOWN",
      miscellaneousQualifiersSubordinateFinancing: "UNKNOWN"
    }
  };
  const flatUser = flatUserObj;
  const nestedUserObj = {};
  let tempKey = "";

  const inner = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          tempKey = key;
          inner(obj[key]);
        }
        if (typeof obj[key] !== "object") {
          if (!nestedUserObj[tempKey]) nestedUserObj[tempKey] = {};
          nestedUserObj[tempKey][key] = flatUser[key];
        }
      }
    }
  };
  inner(userSchema);
  
  if (flatUser["_id"]) nestedUserObj["_id"] = flatUser["_id"];
  return nestedUserObj;
};
