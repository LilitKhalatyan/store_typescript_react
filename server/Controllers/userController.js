const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");

const User = db.users;

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    };
    const user = await User.create(data);
    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.secretKey);
      // res.cookie("jwt", token, { httpOnly: true });
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        console.log("issame");
        let token = jwt.sign({ id: user.id }, process.env.secretKey);
        // res.cookie("jwt", token, { httpOnly: true });
        res.status(201).json({
          name: user.name,
          user: user.id,
          token,
        });
        return;
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    res.status(500).send("Authentication error");
  }
};

module.exports = {
  signup,
  login,
};
