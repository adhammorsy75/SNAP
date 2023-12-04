const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

//show route controllers
const cartController = require('./controllers/cartController')
const gamesController = require('./controllers/gamesController')
const userController = require('./controllers/userController')


const PORT = process.env.PORT || 3015


//middleware
const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

//show routes
app.get('/', (req, res) => res.send('This is root'))

//Cart Routes
app.get('/carts/', cartController.getAllCarts)
app.get('/carts/:id', cartController.getOneCart)
app.post('/carts/', cartController.createNewCart)
app.put('/carts/:id', cartController.updateCart)
app.delete('/carts/:id', cartController.deleteCart)
app.put('/carts/:cartId/', cartController.updateCurrentOrderInCart)



app.get('/games/', gamesController.getAllGames);
app.get('/games/:id', gamesController.getOneGame);
app.post('/games/', gamesController.createNewGame);
app.put('/games/:id', gamesController.updateGame);
app.delete('/games/:id', gamesController.deleteGame);


//Users Routes
app.get('/users/', userController.getAllUsers)
app.get('/users/:id', userController.getOneUser)
app.post('/users/', userController.createNewUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)
// app.delete('/users/:userId/clearCart', (req, res) => {
//     req.cart = { current_order: [] }
//     return res.status(200).json({ message: 'Cart items cleared' })
//   })


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))