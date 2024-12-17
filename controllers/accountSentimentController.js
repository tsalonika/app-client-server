const AccountSentiment = require("../models/accountSentiment");

exports.getAccountSentiment = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "userId query parameter is required" });
  }

  AccountSentiment.getAccountSentiment(userId, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (!results || !results.data || results.data.length === 0) {
      return res.status(404).json({ message: "No sentiment data found" });
    }

    res.json(results);
  });
};
