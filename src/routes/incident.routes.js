const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incident.controller");
const validate = require("../middlewares/validation");
const { incidentSchema } = require("../validations/incident.validation");

router.post("/", validate(incidentSchema), incidentController.createIncident);

router.get("/", incidentController.getAllIncidents);

router.get("/filter", incidentController.getIncidentsByFilter);

router.get("/pagination", incidentController.getIncidentsByPagination);

router.get("/:id", incidentController.getIncidentById);

router.patch("/:id", incidentController.updateIncidentStatus);

router.delete("/:id", incidentController.deleteIncident);

module.exports = router;
