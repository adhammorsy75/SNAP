const { Schema, Types } = require('mongoose');

const gameSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    genres: [{ type: Types.ObjectId, ref: 'Genre' }],
    platforms: [{ type: Types.ObjectId, ref: 'Platform' }],
  },
  { timestamps: true }
);

module.exports = gameSchema;
