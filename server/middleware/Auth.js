const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async (req, res, next) => {
  let token = req.header("alya-HD-token");
  if (!token) {
    return res.status(401).json({ msg: "No token,Authorization denied!!" });
  }
  try {
    let valide = await jwt.verify(token, "alyatech");
    req.user = valide.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid Token" });
    console.error(err.message);
  }
};
