const router = require('express').Router();
const { models } = require('../db');
const { User, Cart, Product } = models;

// o: what is this middleware accomplishing exactly?

// Middleware to authenticate users based on token in request headers
async function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const user = await User.findByToken(token);
      req.user = user;
    } catch (error) {
      console.log(error);
    }
  }
  next();
}

// o: you are duplicating the same code on a different file

// Middleware to restrict access to admin users only
function adminOnly(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(403);
  }
}

router.use(authenticateUser);

// o: take a look at this to see if you need it

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



// explicitly select only the id and username fields - even though
// users' passwords are encrypted, it won't help if we just
// send everything to anyone who asks!
