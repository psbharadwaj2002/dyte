const express = require("express");
const { default: mongoose } = require("mongoose");
const { PORT, MONGO_URL, errMessage } = require("../config");
const Log = require("../models/logModel");
const router = express();

router.get("/getLogs", async (req, res) => {
  try {
    const fetchedLogs = await Log.find({});
    console.log(`On route "/getLogs"`);
    return res
      .status(200)
      .json({ count: fetchedLogs.length, data: fetchedLogs });
  } catch (error) {
    res.status(500).send({ message: error.message });
    errMessage(error);
  }
});

module.exports = router;
