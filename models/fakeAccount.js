const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const FakeAccount = {
  getFakeAccountByName: (name, callback) => {
    db.query(
      "SELECT * FROM fake_account WHERE name = ? LIMIT 1",
      [name],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = FakeAccount;
