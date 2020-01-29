const express = require("express");
const modelGeapp = require("../models/geapp");
const router = express.Router();

router.route("/createGeapp").post((req, res) => {
  let ubicacion = new modelGeapp(req.body);

  ubicacion.save((err, response) => {
    if (err) {
      return res.json(err);
    }
  });
  return res.send(true);
});

module.exports = router;