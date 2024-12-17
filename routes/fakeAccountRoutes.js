const express = require("express");
const router = express.Router();
const fakeAccountController = require("../controllers/fakeAccountController");

router.get("/", fakeAccountController.getFakeAccountByName);

module.exports = router;
