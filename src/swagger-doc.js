/**
 * @swagger
 * tags:
 *   name: Incidents
 *   description: API for managing AI safety incidents
 */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Use this endpoint to check if the server is up and running.
 *     responses:
 *       200:
 *         description: The server is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Server is up and running
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
 *               - status
 *               - reportedBy
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
 *               status:
 *                 type: string
 *                 enum: [open, investigating, resolved, closed]
 *                 description: The current status of the incident
 *               reportedBy:
 *                 type: string
 *                 description: The user who reported the incident
 *     responses:
 *       201:
 *         description: Incident successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d5ecf8a4b0f74f0c4e9b6c"
 *                     title:
 *                       type: string
 *                       example: "System outage"
 *                     description:
 *                       type: string
 *                       example: "The server went down due to a network issue."
 *                     severity:
 *                       type: string
 *                       example: "high"
 *                     status:
 *                       type: string
 *                       example: "open"
 *                     reportedBy:
 *                       type: string
 *                       example: "user123"
 *                     createdAt:
 *                       type: string
 *                       example: "2025-04-26T12:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2025-04-26T12:00:00.000Z"
 *       400:
 *         description: Validation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "Validation failed for the input data"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Unexpected error occurred"
 */


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

/**
 * @swagger
 * /incidents/filter:
 *   get:
 *     summary: Get incidents by filter criteria
 *     tags: [Incidents]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [open, investigating, resolved, closed]
 *         description: Filter incidents by status
 *       - in: query
 *         name: severity
 *         schema:
 *           type: string
 *           enum: [low, medium, high, critical]
 *         description: Filter incidents by severity
 *       - in: query
 *         name: reportedBy
 *         schema:
 *           type: string
 *         description: Filter incidents by the name of the reporter
 *     responses:
 *       200:
 *         description: A list of filtered incidents
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                   example: 5
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       severity:
 *                         type: string
 *                       status:
 *                         type: string
 *       404:
 *         description: No incidents found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: fail
 *                 message:
 *                   type: string
 *                   example: No incidents found matching the criteria
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /incidents/pagination:
 *   get:
 *     summary: Get incidents with pagination
 *     tags: [Incidents]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of incidents per page
 *     responses:
 *       200:
 *         description: A list of incidents with pagination data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                   example: 5
 *                 total:
 *                   type: integer
 *                   example: 100
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 10
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       severity:
 *                         type: string
 *                       status:
 *                         type: string
 *       404:
 *         description: No incidents found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: fail
 *                 message:
 *                   type: string
 *                   example: No incidents found
 *       500:
 *         description: Internal server error
 */

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

/**
 * @swagger
 * /incidents/{id}:
 *   patch:
 *     summary: Update the status and severity of an incident
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
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *                 description: New severity level of the incident
 *     responses:
 *       200:
 *         description: Status and severity updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d5ecf8a4b0f74f0c4e9b6c"
 *                     status:
 *                       type: string
 *                       example: "resolved"
 *                     severity:
 *                       type: string
 *                       example: "high"
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Incident not found
 *       500:
 *         description: Internal server error
 */

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
