const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcryptjs");
const formInfoData = require("./UserHelper");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email is required"
    },
    userName: {
      type: String,
      trim: true,
      unique: true,
      minlength: 4,
      maxlength: 10,
      required: "userName is required"
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
      nameOfCompanylastName: {
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
      }
    },
    ownerOccupied: {
      purchase: {
        type: String,
        enum: ["YES", "UNKNOWN", "NO"],
        default: "YES"
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
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("User", userSchema);
