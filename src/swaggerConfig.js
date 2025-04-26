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
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [
    path.join(__dirname, "routes/*.js"),
    path.join(__dirname, "models/incident.model.js"),
    path.join(__dirname, "./swagger-doc.js"),
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
