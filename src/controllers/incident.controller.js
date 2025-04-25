const Incident = require("../model/incident.model");

// POST /api/v1/incidents
const createIncident = async (req, res) => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json({ status: "success", data: incident });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
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
    const { status } = req.body;
    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      { status },
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
  updateIncidentStatus,
  deleteIncident,
};
