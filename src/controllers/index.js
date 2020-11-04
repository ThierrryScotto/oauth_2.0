//
//dependencies
require('../auth/passport-setup');
const passport = require('passport');

const home = (req, res) => {
  res.send('Example Home page!');
};

const failed = (req, res) => {
  res.send('You Failed to log in!');
};

const good = (req, res) => {
  res.send(`Welcome mr ${req.user.displayName}`);
};

const google = (req, res) => {
  passport.authenticate('google', { scope: ['profile', 'email'] });
};

const logout = (req, res) => {
  passport.authenticate('google', { scope: ['profile', 'email'] });
};

module.exports = {
  home,
  failed,
  good,
  google,
  logout
}