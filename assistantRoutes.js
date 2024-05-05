const express = require("express");
const router = express.Router();
const Assistant = require("../models/Assistant");

// POST /assistant - Create a new assistant
router.post("/assistant", async (req, res) => {
  try {
    const assistant = await Assistant.create(req.body);
    res.status(201).json({ id: assistant._id });
  } catch (error) {
    console.error("Error creating assistant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /assistant/:assistant_id - Retrieve an assistant by ID
router.get("/assistant/:assistant_id", async (req, res) => {
  try {
    const assistant = await Assistant.findById(req.params.assistant_id);
    if (!assistant) {
      return res.status(404).json({ error: "Assistant not found" });
    }
    res.json(assistant);
  } catch (error) {
    console.error("Error retrieving assistant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT /assistant/:assistant_id - Update an assistant by ID
router.put("/assistant/:assistant_id", async (req, res) => {
  try {
    const assistant = await Assistant.findByIdAndUpdate(
      req.params.assistant_id,
      req.body,
      { new: true }
    );
    if (!assistant) {
      return res.status(404).json({ error: "Assistant not found" });
    }
    res.json(assistant);
  } catch (error) {
    console.error("Error updating assistant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE /assistant/:assistant_id - Delete an assistant by ID
router.delete("/assistant/:assistant_id", async (req, res) => {
  try {
    const assistant = await Assistant.findByIdAndDelete(
      req.params.assistant_id
    );
    if (!assistant) {
      return res.status(404).json({ error: "Assistant not found" });
    }
    res.json({ message: "Assistant deleted successfully" });
  } catch (error) {
    console.error("Error deleting assistant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
