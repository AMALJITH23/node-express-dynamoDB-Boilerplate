const express = require("express");
const router = express.Router();
const table = require("../model/common/table");

router.post("/create-table", function (req, res, next) {
  table
    .createTable(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
