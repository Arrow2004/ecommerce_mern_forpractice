const mongoose = require("mongoose");

const productScheme = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    slug: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    offer: {
        type: Number
    },
    productPictures: [
        {img: {type: String}}
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    updatedAt: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productScheme);
