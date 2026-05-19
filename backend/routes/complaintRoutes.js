const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


const {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  searchComplaintByLocation,
  deleteComplaint,
} = require("../controllers/complaintController");

router.post("/", authMiddleware, addComplaint);

router.get("/", getComplaints);

router.put("/:id", updateComplaintStatus);
router.delete("/:id", deleteComplaint);

router.get("/search", searchComplaintByLocation);

module.exports = router;