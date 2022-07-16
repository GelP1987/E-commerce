const router = require("express").Router();
const { Category, Product } = require("../../models");
const db = require("../../config/connection");
// The `/api/categories` endpoint

router.get("/", (req, res) => {
  console.log("======================");
  Category.findAll({
    include: [db.Product],
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
