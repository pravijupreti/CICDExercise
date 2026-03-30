const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "COC backend is working" });
});

module.exports = router;