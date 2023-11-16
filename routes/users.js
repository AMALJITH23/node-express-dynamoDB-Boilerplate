const express = require("express");
const router = express.Router();
const userController = require("../controller/users/User");

// add user
router.post("/", function (req, res, next) {
  userController
    .addUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

// get all users
router.get("/all", function (req, res, next) {
  userController
    .getAllUsers(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

// get user
router.get("/", function (req, res, next) {
  userController
    .getUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

// update user
router.put("/", function (req, res, next) {
  userController
    .updateUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

// delete user
router.delete("/", function (req, res, next) {
  userController
    .deleteUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
