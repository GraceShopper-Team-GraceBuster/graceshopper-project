//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Movies = require("./models/Movies");
const Cart = require("./models/Cart");
const CartItems = require("./models/CartItems");

//associations could go here!

// o: you are miunderstanding how this is supposed to be setup

// o: should be has many
User.hasOne(Cart);
Cart.belongsTo(User);

// o: remove this
CartItems.belongsTo(Movies);

// o: this is correct
Cart.belongsToMany(Movies, { through: CartItems });
Movies.belongsToMany(Cart, { through: CartItems });

module.exports = {
  db,
  models: {
    User,
    Movies,
    Cart,
    CartItems,
  },
};
