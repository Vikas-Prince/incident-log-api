const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const incidentRoutes = require("./routes/incident.routes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./middlewares/errorHandlers");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");

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

app.use("/api/v1/incidents", incidentRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Catch-all should be placed at the end to only match if no other route is found
// app.all("*", (req, res, next) => {
//   console.warn("Invalid route accessed:", req.originalUrl);
//   next(new AppError("Requested route not found", 404));
// });
// Global Error Middleware
app.use(globalErrorHandler);

module.exports = app;
