const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const OnlineActivity = {
  getOnlineActivity: (userId, callback) => {
    db.query(
      "SELECT * FROM online_activity WHERE user = ? AND DATE(date) = CURDATE()",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },

  getOnlineActivityByWeek: (userId, callback) => {
    db.query(
      "SELECT * FROM online_activity WHERE user = ? AND YEARWEEK(date, 1) = YEARWEEK(CURDATE(), 1)",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = OnlineActivity;
