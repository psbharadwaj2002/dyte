const express = require("express");
const { default: mongoose } = require("mongoose");
const { PORT, MONGO_URL, errMessage } = require("./config");
const Log = require("./models/logModel");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Log Ingestor and Query Interface");
  console.log(`On path "/"`);
});

app.use("/", require("./routes/addLog.route"));
app.use("/", require("./routes/getLog.route"));

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`App connected to database successfully`);
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    errMessage(error);
  });
