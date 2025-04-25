const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incident.controller");
const validate = require("../middlewares/validation");
const { incidentSchema } = require("../validations/incident.validation");

/**
 * @swagger
 * tags:
 *   name: Incidents
 *   description: API for managing AI safety incidents
 */

/**
 * @swagger
 * /incidents:
 *   post:
 *     summary: Create a new incident
 *     tags: [Incidents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - severity
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the incident
 *               description:
 *                 type: string
 *                 description: A detailed description of the incident
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *                 description: Severity level of the incident
 *     responses:
 *       201:
 *         description: Incident successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The MongoDB ObjectId of the incident
 *       400:
 *         description: Validation failed
 */
router.post("/", validate(incidentSchema), incidentController.createIncident);

/**
 * @swagger
 * /incidents:
 *   get:
 *     summary: Get all incidents
 *     tags: [Incidents]
 *     responses:
 *       200:
 *         description: A list of all incidents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The MongoDB ObjectId of the incident
 *                   title:
 *                     type: string
 *                     description: The title of the incident
 *                   description:
 *                     type: string
 *                     description: A detailed description of the incident
 *                   severity:
 *                     type: string
 *                     enum: [low, medium, high, critical]
 *                     description: Severity level of the incident
 *                   status:
 *                     type: string
 *                     enum: [open, investigating, resolved, closed]
 *                     description: Current status of the incident
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Timestamp of incident creation
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Timestamp of the last update
 */
router.get("/", incidentController.getAllIncidents);

/**
 * @swagger
 * /incidents/{id}:
 *   get:
 *     summary: Get a single incident by ID
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the incident
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The incident object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The MongoDB ObjectId of the incident
 *                 title:
 *                   type: string
 *                   description: The title of the incident
 *                 description:
 *                   type: string
 *                   description: A detailed description of the incident
 *                 severity:
 *                   type: string
 *                   enum: [low, medium, high, critical]
 *                   description: Severity level of the incident
 *                 status:
 *                   type: string
 *                   enum: [open, investigating, resolved, closed]
 *                   description: Current status of the incident
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Timestamp of incident creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Timestamp of the last update
 *       404:
 *         description: Incident not found
 */
router.get("/:id", incidentController.getIncidentById);

/**
 * @swagger
 * /incidents/{id}:
 *   patch:
 *     summary: Update the status of an incident
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the incident
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [open, investigating, resolved, closed]
 *                 description: New status of the incident
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Incident not found
 */
router.patch("/:id", incidentController.updateIncidentStatus);

/**
 * @swagger
 * /incidents/{id}:
 *   delete:
 *     summary: Delete an incident by ID
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the incident
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Incident deleted successfully
 *       404:
 *         description: Incident not found
 */
router.delete("/:id", incidentController.deleteIncident);

module.exports = router;
