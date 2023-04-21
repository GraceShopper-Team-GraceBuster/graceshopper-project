const router = require('express').Router();
const {
  models: { User, Cart, Product },
} = require('../db');

// Middleware to restrict access to admin users only
function adminOnly(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(403);
  }
}

// Get all users (admin only)
router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'isAdmin'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Get user by ID (admin only)
router.get('/:id', adminOnly, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'username', 'email', 'isAdmin'],
      include: [{ model: Cart, include: [{ model: Product }] }],
    });
    if (!user) {
      res.sendStatus(404);
      return;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
