const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incident.controller");
const validate = require("../middlewares/validation");
const { incidentSchema } = require("../validations/incident.validation");

// Create a new incident
router.post("/", validate(incidentSchema), incidentController.createIncident);

// Get all incidents
router.get("/", incidentController.getAllIncidents);

// Get single incident by ID
router.get("/:id", incidentController.getIncidentById);

// Update incident status
router.patch("/:id", incidentController.updateIncidentStatus);

// Delete an incident
router.delete("/:id", incidentController.deleteIncident);

module.exports = router;
