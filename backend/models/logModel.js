const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  level: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  resourceId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  traceId: {
    type: String,
    required: true,
  },
  spanId: {
    type: String,
    required: true,
  },
  commit: {
    type: String,
    required: true,
  },
  metadata: {
    type: {
      parentResourceId: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
});

const Log = mongoose.model("logs", logSchema);

module.exports = Log;
