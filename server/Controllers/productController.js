const express = require("express");

const router = express.Router();

const db = require("../Models");
// const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const Product = db.products;

const addOne = async (req, res) => {
  let info = {
    // title: req.body.title,
    // details: req.body.details,
    // userId: req.userId,
  };
  const product = await Product.create(info);
  // console.log(product.dataValues);
  res.status(200).send("C R E A T E D");
};

const getAll = async (req, res) => {
  let userId = req.userId;

  let products = await Product.findAll({
    where: { userId: userId },
    raw: true,
  });
  // console.log(products);
  res.status(200).send(products);
};

const getOne = async (req, res) => {
  let userId = req.userId;
  let id = req.params.id;
  let product = await Product.findOne({
    where: {
      userId: userId,
      id: id,
    },
    raw: true,
  });
  console.log(product, "Get one");
  res.status(200).send(product);
};

const updateOne = async (req, res) => {
  let userId = req.userId;
  let id = req.params.id;
  let product = await Product.update(
    {
      title: req.body.title,
      details: req.body.details,
      done: req.body.done,
    },
    {
      where: {
        userId: userId,
        id: id,
      },
      // raw: true,
    }
  );
  // console.log(product);
  res.status(200).send("Updated");
  // res.json("okay");
};

const updateStatusById = async (req, res) => {
  console.log("sdfsdf");
  let userId = req.userId;
  let id = req.params.id;
  let product = await Product.update(
    {
      done: false,
    },
    {
      where: {
        userId: userId,
        id: id,
      },
      // raw: true,
    }
  );
  console.log(product, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  res.status(200).send("Updated");
  // res.json("okay");
};

const deleteOne = async (req, res) => {
  let userId = req.userId;
  let id = req.params.id;
  await Product.destroy({
    where: {
      userId: userId,
      id: id,
    },
  });
  console.log(" D E L E T E D ");
  res.status(200).send("Deleted");
};

const download = async (req, res) => {
  let products = await Product.findAll();
  res.attachment("products.json");
  res.status(200).send(JSON.stringify(products));
};

module.exports = {
  addOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
  updateStatusById,
  download,
};
