const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email is required"
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      minlength: 4,
      maxlength: 14,
      required: "username is required"
    },
    password: {
      type: String,
      required: [true, "Please provide a password"]
    },
    avatar: {
      type: String,
      required: "Avatar image is required",
      default: "/static/images/profile-image.jpg"
    },
    about: {
      type: String,
      trim: true
    },
    roles: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    lastSolicitationDate: {
      type: String,
      default: "Wed Jan 01 2000 00:00:00 GMT-0800 (Pacific Standard Time)"
    },
    userProfile: {
      firstName: {
        type: String,
        trim: true,
        default: ""
      },
      lastName: {
        type: String,
        trim: true,
        default: ""
      },
      secondaryEmailAddress: {
        type: String,
        trim: true,
        lowercase: true,
        default: ""
      },
      workNumber: {
        type: Number,
        trim: true,
        default: 0
      },
      nameOfCompany: {
        type: String,
        trim: true,
        default: ""
      },
      phoneNumber: {
        type: Number,
        trim: true,
        default: 0
      },
      workNumber: {
        type: Number,
        trim: true,
        default: 0
      },
      companyPhoneNumber: {
        type: Number,
        trim: true,
        default: 0
      },
      fax: {
        type: Number,
        trim: true,
        default: 0
      },
      companyStreetAddress: {
        type: String,
        trim: true,
        default: ""
      },
      city: {
        type: String,
        trim: true,
        default: ""
      },
      zip: {
        type: Number,
        trim: true,
        default: 0
      },
      personalNotes: {
        type: String,
        trim: true,
        default: ""
      },
      sourceName: {
        type: String,
        trim: true,
        default: ""
      },
      sourcePhone: {
        type: String,
        trim: true,
        default: 0
      },
      sourceEmail: {
        type: String,
        trim: true,
        lowercase: true,
        default: ""
      },
      clientPaysBrokerDemand: {
        type: Boolean,
        default: false
      },
      lenderPaysRebates: {
        type: Boolean,
        default: false
      },
      brokerPaidThroughEscrow: {
        type: Boolean,
        default: false
      },
      companyState: {
        type: String,
        enum: [
          "AK - Alaska",
          "AL - Alabama",
          "AZ - Arizona",
          "CA - California",
          "CO - Colorado",
          "CT - Connecticut",
          "DE - Delaware",
          "FL - Florida",
          "GA - Georgia",
          "HI - Hawaii",
          "IA - Iowa",
          "ID - Idaho",
          "IL - Illinois",
          "IN - Indiana",
          "KS - Kansas",
          "KY - Kentucky",
          "LA - Louisiana",
          "MA - Massachusetts",
          "MD - Maryland",
          "ME - Maine",
          "MI - Michigan",
          "MN - Minnesota",
          "MO - Missouri",
          "MS - Mississippi",
          "MT - Montana",
          "NC - North Carolina",
          "ND - North Dakota",
          "NE - Nebraska",
          "NE - Nebraska",
          "NJ - New Jersey",
          "NM - New Mexico",
          "NV - Nevada",
          "NY - New York",
          "OH - Ohio",
          "OK - Oklahoma",
          "OR - Oregon",
          "PA - Pennsylvania",
          "PR - Puerto Rico",
          "RI - Rhode Island",
          "SC - South Carolina",
          "SD - South Dakota",
          "TN - Tennessee",
          "TX - Texas",
          "UT - Utah",
          "VA - Virginia",
          "VT - Vermont",
          "WA - Washington",
          "WI - Wisconsin",
          "WV - West Virginia",
          "WY - Wyoming"
        ]
      },
      lenderNameBank: {
        type: Boolean,
        default: false
      },
      lenderNameCDFI: {
        type: Boolean,
        default: false
      },
      lenderNameCreditUnion: {
        type: Boolean,
        default: false
      },
      lenderNameInsuranceCompany: {
        type: Boolean,
        default: false
      },
      lenderNameNonBankLender: {
        type: Boolean,
        default: false
      },
      lenderNamePrivateEquity: {
        type: Boolean,
        default: false
      },
      specialtySelectOne: {
        type: String,
        default: "none"
      },
      specialtySelectTwo: {
        type: String,
        default: "none"
      },
      specialtySelectThree: {
        type: String,
        default: "none"
      },
      specialtySelectFour: {
        type: String,
        default: "none"
      },
      specialtySelectFive: {
        type: String,
        default: "none"
      },
      specialtySelectSix: {
        type: String,
        default: "none"
      },
      specialtySelectSeven: {
        type: String,
        default: "none"
      },
      specialtySelectEight: {
        type: String,
        default: "none"
      },
      specialtySelectNine: {
        type: String,
        default: "none"
      },
      specialtySelectZero: {
        type: String,
        default: "none"
      },
      typeOfLender: {
        type: String,
        enum: [
          "Bank",
          "CDFI",
          "Credit Union",
          "Insurance Company",
          "Non-Bank Lender",
          "Private Equity"
        ],
        default: "Bank"
      }
    },
    ownerOccupied: {
      purchase: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      refinance: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      cashOutRefinance: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      renovationImprovement: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      bridge: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      revolvingBusinessLOC1stPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      revolvingBusinessLOC2stPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      ownerMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      ownerMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      ownerMaxLTVPercent: {
        type: Number,
        default: 0
      },
      ownerMinDCR: {
        type: Number,
        default: 0
      }
    },
    investmentNonSBARealEstate: {
      investmentPurchase: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentRefinance: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentCashOutRefinance: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentRenovationImprovement: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentBridge: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentRevolvingBusinessLOC1stPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentRevolvingBusinessLOC2stPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      investmentNonSBAMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      investmentNonSBAMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      investmentNonSBAMaxLTVPercent: {
        type: Number,
        default: 0
      },
      investmentNonSBAMaxLTCPercent: {
        type: Number,
        default: 0
      },
      investmentNonSBAMaxARV: {
        type: Number,
        default: 0
      },
      investmentNonSBAMinDebtYield: {
        type: Number,
        default: 0
      },
      investmentNonSBAMinDCR: {
        type: Number,
        default: 0
      }
    },
    sbaSevenALoans: {
      sbaExpress: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      exoprtExpressWC: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      internationalTrade: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      seasonalCAPLines: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      ownerOccupiedCommercial: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      debtRefinance: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      contractCAPLines: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      buildersCAPLines: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      workingCAPLines: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      sbaMicroLoan: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      businessAcquisition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBASevenMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      SBASevenMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      SBASevenMaxLTVPercent: {
        type: Number,
        default: 0
      },
      SBASevenMinDCR: {
        type: Number,
        default: 0
      }
    },
    SBAFiveFourLoans: {
      SBAFiveFourFirstDeedRealEstate: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBAFiveFourFirstDeedRealEquipment: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBAFiveFourRefinanceProgram: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBAFiveFourFirstDeedRealEstateBridge: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBAFiveFourFirstDeedEquipmentBridge: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBAFiveFourRefinanceBridge: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      SBAFiveFourMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      SBAFiveFourMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      SBAFiveFourMaxLTVPercent: {
        type: Number,
        default: 0
      },
      SBAFiveFourMinDCR: {
        type: Number,
        default: 0
      }
    },
    construction: {
      investment: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      renovation: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      residentialLongterm: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      residentialFixandFlip: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      groundUpSpecHome: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      ownerUser: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      tractHomes: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      apartments: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      constructiontoPermanent: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      landDevelopment: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      residential: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      PUD: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      purchaseWithLand: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      entitlements: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miniperm: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      leasedLand: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      brokenProject: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      manufacturedHomeSingleWide: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      manufacturedHomeDoubleWide: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      constructionMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      constructionMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      constructionMaxLTVPercent: {
        type: Number,
        default: 0
      },
      constructionMaxLTCPercent: {
        type: Number,
        default: 0
      },
      constructionNonSBAMaxARV: {
        type: Number,
        default: 0
      },
      constructionMinDCR: {
        type: Number,
        default: 0
      }
    },
    businessLendingNonSBA: {
      businessCreditCard: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      businessExpansionnoRE: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      equipmentFinancing: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      businessAcquisitionsMergers: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      franchisePurchases: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      revolvingBLOCFirstPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      revolvingBLOCSecondPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      accountsReceivable: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      crossCollateral: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      equipment: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      invoiceFinancing: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      irrevocableTrust: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      projectionBased: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      purchaseOrderFinancing: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      realEstate: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      stockSavings: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      statedIncome: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      businessLendingMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      businessLendingMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      businessLendingMaxLTVPercent: {
        type: Number,
        default: 0
      },
      businessLendingMinDCR: {
        type: Number,
        default: 0
      }
    },
    nonCommercialResidentialLending: {
      conventionalFNMA: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      governmentFHA: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      kRehab: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      portfolio: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      jumbo: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    privateMoneyLending: {
      privateMoneyMinumumLoanAmount: {
        type: Number,
        default: 0
      },
      privateMoneyMaximumLoanAmount: {
        type: Number,
        default: 0
      },
      privateMoneyMaxLTVPercentCommercial: {
        type: Number,
        default: 0
      },
      privateMoneyMaxLTVPercentResidential: {
        type: Number,
        default: 0
      },
      privateMoneyMaxARVCommercial: {
        type: Number,
        default: 0
      },
      privateMoneyMaxARVResidential: {
        type: Number,
        default: 0
      },
      privateMoneyMinimumDCR: {
        type: Number,
        default: 0
      },
      privateMoneyFixedRateAmortized: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      privateMoneyAdjustableRateAmortized: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      privateMoneyinterestOnly: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      privateMoneyInterestRateMin: {
        type: Number,
        default: 0
      },
      privateMoneyInterestRateMax: {
        type: Number,
        default: 0
      },
      privateMoneyTermRangeMax: {
        type: Number,
        default: 0
      },
      privateMoneyTermRangeMin: {
        type: Number,
        default: 0
      },
      privateMoneyFeesFlatMin: {
        type: Number,
        default: 0
      },
      privateMoneyFeesFlatMax: {
        type: Number,
        default: 0
      },
      privateMoneyFeesPointsMin: {
        type: Number,
        default: 0
      },
      privateMoneyFeesPointsMax: {
        type: Number,
        default: 0
      },
      privateClosingCostsMin: {
        type: Number,
        default: 0
      },
      privateClosingCostsMax: {
        type: Number,
        default: 0
      },
      privateDaysToFundingMin: {
        type: Number,
        default: 0
      },
      privateDaysToFundingMax: {
        type: Number,
        default: 0
      }
    },
    multiUnitLiving: {
      multiUnitFraternitySorority: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitMultiFamily: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitStudentHousing: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitHotelMotelFlag: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitMobileHomePark: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitCondoTownHome: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitHotelMotelNoFlag: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      multiUnitAssisstedLiving: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    automotive: {
      automotiveBodyShop: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      automotiveDealerShip: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      automotiveCarWash: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      automotiveGasStation: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    healthcare: {
      healthcareDoctorsOffice: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      healthcareHospital: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      healthcareMedicalLab: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    retail: {
      retailRestaurant: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      retailMall: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      retailSingleTenant: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    miscellaneous: {
      miscellaneousSingleFamilyResidential: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousTwoFourUnit: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousSpecialUse: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousUrbanInfill: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousForeignPropertyNonUSProperty: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousChurchReligion: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousIndustrialWarehouse: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousOffice: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousEntertainment: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousMaritimeMarina: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousRawLand: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousFarmAgriculture: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousMixedUse: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousStorage: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousLeaseholdProperty: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    financialCreditIssue: {
      financialCreditIssueStatedIncome: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueGiftFunds: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueBankruptcy: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueNonUSCitizen: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueMissedPayments: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueForeclosure: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueShortSale: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueTaxLiens: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueLowFICO: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueLowLiquidity: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      financialCreditIssueJudgements: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    miscellaneousQualifiers: {
      miscellaneousQualifiersExchange: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersNonProfit: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersNonRecourse: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersFactoring: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersDeferredMaintenance: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersCannabisRelated: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersStartUp: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersAssestBasedLending: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersResidentialBridge: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersInterestOnlyIndefinite: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersInterestOnlyIntoTerm: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersRelationshipPricing: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersRequiredDepositRelationship: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersFirstLienPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersSecondLientPosition: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      },
      miscellaneousQualifiersSubordinateFinancing: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "UNKNOWN"
      }
    },
    /* we wrap 'following' and 'followers' in array so that when they are populated as objects, they are put in an array (to more easily iterate over them) */
    following: [{ type: ObjectId, ref: "User" }],
    followers: [{ type: ObjectId, ref: "User" }]
  },
  /* gives us "createdAt" and "updatedAt" fields automatically */
  { timestamps: true }
);

const autoPopulateFollowingAndFollowers = function(next) {
  this.populate("following", "_id name avatar");
  this.populate("followers", "_id name avatar");
  next();
};

userSchema.pre("findOne", autoPopulateFollowingAndFollowers);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
userSchema.plugin(passportLocalMongoose, { usernameQueryFields: ["email"] });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("User", userSchema);
