const express = require("express");
const router = express.Router();

const onlineActivityController = require("../controllers/onlineActivityController");

router.get("/today", onlineActivityController.getOnlineActivity);
router.get("/week", onlineActivityController.getOnlineActivityByWeek);

module.exports = router;
