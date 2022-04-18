const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const dbConnection = require("./database/connection");

dotEnv.config();
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/question", require("./routes/questionRoutes"));
app.use("/api/v1/test", require("./routes/testRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.log("Error: ", err);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
