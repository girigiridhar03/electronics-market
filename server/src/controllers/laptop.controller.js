const { laptopModel } = require("../models/laptops.models");

const laptopController = {
    getLaptop: async (req, res) => {
        const page = parseInt(req.query.page) || 1; // Use req.query to get query parameters
        const size = parseInt(req.query.size) || 20; // Use req.query to get query parameters
        const sortDirection = req.query.sort === 'desc' ? -1 : 1; // Check if sort direction is descending
        const titleQuery = req.query.title; // Get the title query parameter
        const query = titleQuery ? { title: { $regex: new RegExp(titleQuery, 'i') } } : {}; // Define the query object
          try {
          const prod = await laptopModel.find(query)
          .sort({ price: sortDirection })
          .skip((page-1)*size)
          .limit(size)
          const totalPages = Math.ceil((await laptopModel.find().countDocuments())/size)
          return res.status(200).send({prod,page, totalPages});
        } catch (error) {
          return res.status(500).send(error.message);
        }
        
    },


  getSingleLaptop: async (req, res) => {
    try {
      const prod = await laptopModel.findById(req.params.id);
      return res.status(200).send(prod);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  createLaptop: async (req, res) => {
    try {
      const prod = await laptopModel.create(req.body);

      return res
        .status(200)
        .send({ prod, message: "prod created successfully" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateLaptop: async (req, res) => {
    try {
      const prod = await laptopModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .send({ prod, message: "prod updated successfully" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  deleteLaptop: async (req, res) => {
       
    try {
      const prod = await laptopModel.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .send({ prod, message: "prod deleted successfully" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};

module.exports = { laptopController };
