const { PORT } = require('../config')

const app = require("../app")

app.listen(PORT, () => {
  console.log("App running on port: ", PORT);
})