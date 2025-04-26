const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const incidentRoutes = require("./routes/incident.routes");
const globalErrorHandler = require("./middlewares/errorHandlers");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");
const healthRoutes = require("./routes/health.routes");
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use("/", healthRoutes);
app.use("/api/v1/incidents", incidentRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(globalErrorHandler);

module.exports = app;
