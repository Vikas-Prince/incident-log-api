const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Incident Log API",
      version: "1.0.0",
      description: "API for logging and managing AI safety incidents",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
  },
  apis: [
    path.join(__dirname, "routes/incident.routes.js"),
    path.join(__dirname, "models/incident.model.js"),
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
