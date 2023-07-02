require("dotenv").config();
const app = require("./src/app");
const { sequelize } = require("./src/db");
const { PORT } = process.env;

app.listen(PORT, () => {
  sequelize.sync({ force: true });  // alter
  console.log(`listening on port ${PORT}`);
});
