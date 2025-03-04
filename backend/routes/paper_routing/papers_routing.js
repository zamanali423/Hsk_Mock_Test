const express = require("express");
const router = express.Router();
const Paper = require("../../models/paper_models/paper_model");

// Get all papers
router.get("/all_papers", async (req, res) => {
  try {
    const papersData = await Paper.find().lean();

    if (!papersData || papersData.length === 0) {
      return res.status(404).json({
        success: false,
        msg: "No papers available",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "All papers retrieved successfully",
      papers: papersData,
    });
  } catch (error) {
    console.error("Error fetching papers:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
