if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5002",
    credentials: true,
    "Access-Control-Allow-Origin": "*",
  })
);

const { checkUser } = require("./middleware/authMiddleware");

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
const Run = require("./models/Run");
app.get("/api", checkUser);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.post("/api/run", async (req, res) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.substring(
      7,
      req.headers.authorization.length
    );
  }
  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(400);
        } else {
          let user = await User.findById(decodedToken.id);
          const run = new Run({
            user: user,
            time: req.body.time,
            meters: req.body.meters,
            path: req.body.path,
          });
          await run.save();
          console.log(run);
          console.log("giusto");
          return res.status(200);
        }
      });
    } else {
      console.log("errore else");
      res.status(404);
    }
  } catch (error) {
    console.log(req.headers.authorization);
    console.log("errore catch");
    console.log(token);
    res.status(404);
  }
});

app.get("/api/archive", async (req, res) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.substring(
      7,
      req.headers.authorization.length
    );
  }
  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(400).json({});
        } else {
          let user = await User.findById(decodedToken.id);
          let archive = await Run.find({ user: user });
          return res.status(200).json({
            archive,
          });
        }
      });
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    res.status(404).json({});
  }
});

app.delete("/api/archive", async (req, res) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.substring(
      7,
      req.headers.authorization.length
    );
  }
  const id = req.body.id;
  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(400).json({});
        } else {
          console.log(id);
          await Run.deleteOne({ _id: id });
          return res.status(200).json({});
        }
      });
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    res.status(404).json({});
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on %s port", process.env.PORT || 3000);
});
