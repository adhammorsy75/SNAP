const mongoose = require('mongoose')
const cartSchema = require('./Cart.js')
const gamesSchema = require('./Games.js')
const userSchema = require('./User.js')


const Cart = mongoose.model('Cart', cartSchema)
const Games = mongoose.model('Games', gamesSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Cart,
    Games,
    User,
    
}
