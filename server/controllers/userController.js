const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

class userController {
  static async googleLogin(req, res, next) {
    try {
      const { google_token } = req.headers;
      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const user = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "123456",
        },
        hooks: false, // Disable hooks
      });

      const access_token = signToken({ id: user.id });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({
        email,
        password,
      });

      res.status(201).json({
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(req.body);

      if (!email || !password) throw { name: "emailorpasswordempty" };

      const user = await User.findOne({ where: { email } });
      if (!user || !comparePassword(password, user.password))
        throw { name: "InvalidUser" };

      res.status(200).json({ access_token: signToken({ id: user.id }) });
    } catch (error) {
      // console.log(error);

      next(error);
    }
  }
}

module.exports = userController;
