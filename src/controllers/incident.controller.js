const Incident = require("../model/incident.model");
const AppError = require("../utils/appError");

// POST /api/v1/incidents
const createIncident = async (req, res, next) => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json({ status: "success", data: incident });
  } catch (err) {
    // Throw the error to be caught by the error handler middleware
    next(new AppError("Failed to create incident", 500)); // Using AppError
  }
};

// GET /api/v1/incidents
const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ status: "success", results: incidents.length, data: incidents });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// GET /api/v1/incidents/filter
const getIncidentsByFilter = async (req, res) => {
  try {
    const { status, severity, reportedBy } = req.query;
    const queryObj = {};

    if (status) queryObj.status = status;
    if (severity) queryObj.severity = severity;
    if (reportedBy) queryObj.reportedBy = reportedBy;

    const incidents = await Incident.find(queryObj).sort({ createdAt: -1 });

    if (incidents.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No incidents found matching the criteria",
      });
    }

    res.status(200).json({
      status: "success",
      results: incidents.length,
      data: incidents,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// GET /api/v1/incidents/pagination
const getIncidentsByPagination = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const incidents = await Incident.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    if (incidents.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No incidents found",
      });
    }

    const totalIncidents = await Incident.countDocuments();

    res.status(200).json({
      status: "success",
      results: incidents.length,
      total: totalIncidents,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalIncidents / parseInt(limit)),
      data: incidents,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// GET /api/v1/incidents/:id
const getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res
        .status(404)
        .json({ status: "fail", message: "Incident not found" });
    }
    res.status(200).json({ status: "success", data: incident });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// PATCH /api/v1/incidents/:id
const updateIncidentStatus = async (req, res) => {
  try {
    const { status, severity } = req.body;
    const updateFields = {};
    if (status) updateFields.status = status;
    if (severity) updateFields.severity = severity;

    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      { updateFields },
      { new: true, runValidators: true }
    );
    if (!incident) {
      return res
        .status(404)
        .json({ status: "fail", message: "Incident not found" });
    }
    res.status(200).json({ status: "success", data: incident });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// DELETE /api/v1/incidents/:id
const deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      return res
        .status(404)
        .json({ status: "fail", message: "Incident not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  createIncident,
  getAllIncidents,
  getIncidentById,
  getIncidentsByFilter,
  getIncidentsByPagination,
  updateIncidentStatus,
  deleteIncident,
};
