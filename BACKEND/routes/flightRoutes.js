const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const flightController = require("../controller/flightController");

router.post("/", flightController.createFlight);
router.get("/", flightController.getFlights);
router.get("/:id", flightController.getFlightById);
router.put("/:id", flightController.updateFlight);
router.delete("/:id", flightController.deleteFlight);

module.exports = router;
