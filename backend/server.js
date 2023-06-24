const mongoose = require("mongoose");
const app = require("./app");
require("colors");

const { DB_HOST } = process.env;
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then((db) => {
    console.log(
      `Database is connected. Name:${db.connection.name}. Host:${db.connection.host}`
        .green.italic.bold
    );
    app.listen(3000, () => {
      console.log(
        "Server running. Use our API on port: 3000".green.italic.bold
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
