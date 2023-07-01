const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3001, () => {
  sequelize.sync({ force: true });  // alter
  console.log("listening on port 3001");
});
