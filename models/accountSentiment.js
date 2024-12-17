const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const AccountSentiment = {
  getAccountSentiment: (userId, callback) => {
    db.query(
      "SELECT positive, neutral, negative FROM account_sentiment WHERE user = ? LIMIT 1",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);

        if (results.length > 0) {
          const sentimentData = results[0];
          const formattedData = [
            { key: "positive", count: sentimentData.positive },
            { key: "neutral", count: sentimentData.neutral },
            { key: "negative", count: sentimentData.negative },
          ];
          callback(null, { data: formattedData });
        } else {
          callback(null, { data: [] });
        }
      }
    );
  },
};

module.exports = AccountSentiment;
