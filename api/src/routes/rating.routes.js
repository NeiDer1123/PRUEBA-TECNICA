const { Router } = require("express");
const {
  getAllRating,
  getRatingById,
  createRating,
  deleteRating,
  updateRating,
} = require("../handlers/rating.handler");

const ratingRouter = Router();

ratingRouter.get("/", getAllRating);

ratingRouter.get("/:id", getRatingById);

ratingRouter.post("/", createRating);

ratingRouter.delete("/:id", deleteRating);

ratingRouter.put("/:id", updateRating);

module.exports = ratingRouter;
