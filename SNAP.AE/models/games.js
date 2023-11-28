const {Schema} = require('mongoose')

const menuSchema = new Schema(
    {        
        name: {type: String, required: true},
        base_price: {type: Number, required: true},   
        description: {type: String },    
        image:{type: String }
    },
    {timestamps: true}
)

module.exports = menuSchema