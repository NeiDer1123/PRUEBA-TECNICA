require("dotenv").config();
const app = require("./src/app");
const { sequelize } = require("./src/db");
const { DB_PORT } = process.env;

app.listen(DB_PORT, () => {
  sequelize.sync({ force: true });  // alter
  console.log(`listening on port ${DB_PORT}`);
});
