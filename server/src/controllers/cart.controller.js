const { cartModel } = require("../models/cart.model");

const cartController = {
  getCart: async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Use req.query to get query parameters
    const size = parseInt(req.query.size) || 20; // Use req.query to get query parameters
    const sortDirection = req.query.sort === 'desc' ? -1 : 1; // Check if sort direction is descending
    const titleQuery = req.query.title; // Get the title query parameter
    const query = titleQuery ? { title: { $regex: new RegExp(titleQuery, 'i') } } : {}; // Define the query object
      try {
      const prod = await cartModel.find(query).populate('userId').populate('items.productId')
      .sort({ price: sortDirection })
      .skip((page-1)*size)
      .limit(size)
      const totalPages = Math.ceil((await cartModel.find().countDocuments())/size)
      return res.status(200).send({prod,page, totalPages});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getUserCart: async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Use req.query to get query parameters
    const size = parseInt(req.query.size) || 20; // Use req.query to get query parameters
    const sortDirection = req.query.sort === 'desc' ? -1 : 1; // Check if sort direction is descending
    const userId = req.params.id;
    console.log(userId)
      try {
      const prod = await cartModel.find({userId}) .populate('userId')
      .populate({
          path: 'items.productId',
          populate: {
              path: 'productType'
          }
    })
      .sort({ price: sortDirection })
      .skip((page-1)*size)
      .limit(size)
      const totalPages = Math.ceil((await cartModel.find().countDocuments())/size)
      return res.status(200).send({prod, totalPages});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },


  getSingleCart: async (req, res) => {
      
    try {
      const prod = await cartModel.findById(req.params.id);
      return res.status(200).send(prod);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  createCart: async (req, res) => {
    try {
      const prod = await cartModel.create(req.body);

      return res
        .status(200)
        .send({ prod, message: "prod created successfully" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateCart: async (req, res) => {
    try {
      const prod = await cartModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .send({ prod, message: "prod updated successfully" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  deleteCart: async (req, res) => {
       
    try {
      const prod = await cartModel.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .send({ prod, message: "prod deleted successfully" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};

module.exports = { cartController };
