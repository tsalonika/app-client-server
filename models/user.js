const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const User = {
  getUserByUsername: (username, callback) => {
    db.query(
      "SELECT username, password FROM users WHERE username = ?",
      [username],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);
      }
    );
  },
};

module.exports = User;
