const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const db = require("./Models");

const app = express();
const PORT = 5505;

app.use(express.json());
// app.use(cors());

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize
  .sync({ force: false })
  .then((data) => {
    console.log("db has been re-sync");
  })
  .catch((err) => {
    console.log("Error whyle syncing table & model");
  });

const userRouter = require("./Routes/userRouter");
const productRouter = require("./Routes/productRouter");

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
