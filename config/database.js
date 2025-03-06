const mongoose = require('mongoose');

const dbConnection = () => {
  const dbURI = process.env.DB_URI;

  if (!dbURI) {
    console.error("Database URI is missing in the environment variables.");
    process.exit(1);
  }

  mongoose
    .connect(dbURI)
    .then((conn) => {
      console.log(`Database Connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database Error: ${err}`);
      process.exit(1);
    });
};

module.exports = dbConnection;
