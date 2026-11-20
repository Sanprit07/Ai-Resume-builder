
const express = require("express");
const router = express.Router();

const Resume = require("../models/Resume");
const protect = require("../middleware/authMiddleware");

// All resume routes require login
router.use(protect);

// CREATE a new resume
router.post("/", async (req, res) => {
  try {
    const resume = await Resume.create({
      ...req.body,
      user: req.userId,
    });

    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ all resumes belonging to logged-in user
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.userId });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ one resume belonging to logged-in user
router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a resume belonging to logged-in user
router.put("/:id", async (req, res) => {
  try {
    const { user, ...updates } = req.body;

    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      updates,
      { returnDocument: "after", runValidators: true }
    );

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a resume belonging to logged-in user
router.delete("/:id", async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
