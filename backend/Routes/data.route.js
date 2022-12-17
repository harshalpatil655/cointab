const { Router } = require("express");
const { dataModel } = require("../Models/data.model");

const dataRoute = Router();

dataRoute.get("/", (req, res) => {
  res.send("Harshal");
});

dataRoute.post("/datapost", async (req, res) => {
  const dataItem = dataModel({ results: req.body.results });
  await dataItem.save();
  console.log(dataItem);
  res.send(dataItem);
});

dataRoute.delete("/delete", async (req, res) => {
  const datadelete = await dataModel.deleteMany({});
  res.send(datadelete);
});

module.exports = { dataRoute };
