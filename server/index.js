if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
    "Access-Control-Allow-Origin": "*",
  })
);

const { checkUser } = require("./middleware/authMiddleware");

const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

app.use(function (req, res, next) {
  if (!req.user)
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect(`https://${req.header("host")}${req.url}`);
    } else {
      next();
    }
  });
}

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const User = require("./models/User");

app.get("/api", checkUser);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(process.env.PORT, () => {
  console.log("Server is running on %s port", process.env.PORT || 3000);
});
