const { User, Cart, Order, GameItem } = require('../models/Index');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate({
        path: 'cart',
        populate: {
          path: 'current_order',
          model: 'Order',
          populate: {
            path: 'game_items',
            model: 'GameItem',
          },
        },
      })
      .exec();

    res.json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function getOneUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id)
      .populate({
        path: 'cart',
        populate: {
          path: 'current_order',
          model: 'Order',
          populate: {
            path: 'game_items',
            model: 'GameItem',
          },
        },
      })
      .exec();

    if (user) {
      return res.json(user);
    }
    return res.status(404).send('The user with this id doesn\'t exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createNewUser(req, res) {
  try {
    const user = await new User(req.body);
    await user.save();

    const cart = await new Cart({});
    await cart.save();

    const order = await new Order({ game_items: [], total_price: '$0' });
    await order.save();

    await User.findByIdAndUpdate(user._id, { cart: cart._id }, { new: true });
    await Cart.findByIdAndUpdate(cart._id, { current_order: order._id }, { new: true });

    return res.status(201).json({
      user,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (user) {
      return res.status(200).json(user);
    }
    throw new Error('User not found');
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (user) {
      return res.status(200).json(user);
    }
    throw new Error('User not found');
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
