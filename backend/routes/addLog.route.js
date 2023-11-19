const express = require("express");
const { default: mongoose } = require("mongoose");
const { PORT, MONGO_URL, errMessage } = require("../config");
const Log = require("../models/logModel");
const router = express();

router.post("/ingestLogs", async (req, res) => {
  try {
    const logs = Array.isArray(req.body) ? req.body : [req.body];

    if (
      logs.some(
        (log) =>
          !log.level ||
          !log.message ||
          !log.resourceId ||
          !log.timestamp ||
          !log.traceId ||
          !log.spanId ||
          !log.commit ||
          !log.metadata ||
          !log.metadata.parentResourceId
      )
    ) {
      return res.status(400).json({
        message: "One or more required fields are missing in the log entries.",
      });
    }

    const newLogs = logs.map((log) => ({
      level: log.level,
      message: log.message,
      resourceId: log.resourceId,
      timestamp: log.timestamp,
      traceId: log.traceId,
      spanId: log.spanId,
      commit: log.commit,
      metadata: {
        parentResourceId: log.metadata ? log.metadata.parentResourceId : null,
      },
    }));

    const insertedLogs = await Log.create(newLogs);
    console.log(insertedLogs.length);
    console.log(`On path /ingestLogs`);
    console.log(`Logs created successfully`);
    return res.status(201).send(insertedLogs);
  } catch (error) {
    res.status(500).send({ message: error.message });
    errMessage(error);
  }
});

module.exports = router;
