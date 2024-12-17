const FakeAccount = require("../models/fakeAccount");

exports.getFakeAccountByName = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query parameter is required" });
  }

  FakeAccount.getFakeAccountByName(name, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "No fake account found" });
    }

    res.json(results[0]);
  });
};
