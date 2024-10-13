const { Schema, model, models, default: mongoose } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    images: [String],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: Object,
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model("Product", ProductSchema);
