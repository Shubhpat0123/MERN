const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({path:"backend/config/config.env"})


connectDatabase();

const server = app.listen(4000, () => {
    console.log(`Server is working on http://localhost:4000`);
  });