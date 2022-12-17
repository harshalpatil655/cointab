const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { dataRoute } = require("./Routes/data.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/data", dataRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected Successfull");
  } catch (err) {
    console.log("Error in Connection");
  }
  console.log("Listening on port 8080");
});
