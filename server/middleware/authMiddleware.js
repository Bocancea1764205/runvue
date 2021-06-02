if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Run = require("../models/Run");

const checkUser = (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.substring(
        7,
        req.headers.authorization.length
      );
    }
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(400);
          next()
        } else {
          let user = await User.findById(decodedToken.id);
          let archive = await Run.find({ user: user });
          if (user && archive) {
            console.log(archive)
            return res.status(200).json({
              user: {
                email: user.email,
                username: user.username,
              },
              archive: archive
            });
          }
          else {
            res.status(400);
          }
        }
      });
    } else {
      res.status(400);
      next()
    }
  } catch {
    console.log("errore catch");
    res.status(404).json({});
  };
}
module.exports = { checkUser };
