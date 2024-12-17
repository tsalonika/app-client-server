const OnlineActivity = require("../models/onlineActivity");

exports.getOnlineActivity = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "userId query parameter is required" });
  }

  OnlineActivity.getOnlineActivity(userId, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (!results || results.length === 0) {
      return res
        .status(404)
        .json({ message: "No Online Activity data found for today" });
    }

    res.json(results);
  });
};

exports.getOnlineActivityByWeek = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "userId query parameter is required" });
  }

  OnlineActivity.getOnlineActivityByWeek(userId, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (!results || results.length === 0) {
      return res
        .status(404)
        .json({ message: "No Online Activity data found for this week" });
    }

    res.json(results);
  });
};
