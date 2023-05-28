const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");

// Router
const productRoute = require("./routes/Product");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/User");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/Order");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Conection Successfull"))
  .catch((err) => {
    console.log(err);
  });
// app.use(
//   cors({
//     origin: [
//       process.env.URLREACT,
//       process.env.URLCLIENT,
//       "https://reactclient.vercel.app/",
//       "https://reactadmin-one.vercel.app/*",
//       "http://localhost:3000",
//       "http://localhost:3001",
//       "http://localhost:3002",
//       "http://localhost:3003",
//       "http://localhost:3004",
//       "http://localhost:3005",
//     ],
//     methods: ["POST", "PUT", "GET", "HEAD", "OPTION", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//API
app.use("/api/product", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
