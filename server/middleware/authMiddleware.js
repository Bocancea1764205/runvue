if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        return res.status(200).json({
          user,
        });
      }
    });
  } else {
    res.status(404).json({});
  }
};

module.exports = { checkUser };
