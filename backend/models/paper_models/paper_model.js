const mongoose = require("mongoose");

// Define a reusable schema for individual papers
const singlePaperSchema = new mongoose.Schema(
  {
    paperId: { type: Number, required: true },
    levelId: { type: Number, required: true },
    name: { type: String, required: true },
    nameTrans: { type: Object },
    scoreFull: { type: Number, required: true },
    seq: { type: Number },
    iconUrl: { type: String },
    levelName: { type: String },
    scoreTotal: { type: Number },
    paperStatus: { type: String, default: null },
    mark_status: { type: Number },
    resourceUrl: { type: String },
    version: { type: Number },
    timeFull: { type: Number },
    paperIdStr: { type: String },
    levelIdStr: { type: String },
    emulatePaperStatus: { type: String, default: null },
    emulateScoreTotal: { type: Number },
    mock_type: { type: Number },
    member_resource: { type: Number },
    question_count: { type: Number },
    resource_status: { type: Number },
    credit: { type: Number },
    status: { type: Number },
    answer: { type: String, default: null },
    apple_product_id: { type: String },
    stripe_product_id: { type: String },
    product_id: { type: Number },
    product_price: { type: Number },
    product_currency: { type: String },
    currency_symbol: { type: String },
    currency_base: { type: Number },
    credit_enough: { type: Boolean },
  },
  { timestamps: true }
);

// Main schema storing papers by level
const paperSchema = new mongoose.Schema(
  {
    beginner: { type: [singlePaperSchema], default: [] },
    intermediate: { type: [singlePaperSchema], default: [] },
    advanced: { type: [singlePaperSchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("papers", paperSchema);
