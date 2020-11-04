//
//dependencies
const router   = require('./router/index');
const passport = require('passport');
const auth     = require('./controllers/index');

const { isLoggedIn} = require('./middlewares/index');
require('./auth/passport-setup');

router.get('/', auth.home);
router.get('/failed', auth.failed);
router.get('/good', isLoggedIn, auth.good);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
function(req, res) {
  res.redirect('/good');
}
);

router.get('/logout', auth.logout);