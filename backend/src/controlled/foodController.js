import { Food } from "../models/Foodmodel.js";

export const getFood = async (req, res) => {
  const { categoryId } = req.query;

  const result = await Food.find().populate("category");

  res.status(200).send(result);
};
export const createfood = async (req, res) => {
  const { body } = req;
  try {
    const result = await Food.create(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const updateFood = async (req, res) => {
  const { id } = await req.params;
  const { body } = req;

  try {
    const result = await Food.findByIdAndUpdate(id, body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const deleteFood = async (req, res) => {
  const { id } = await req.params;
  try {
    const result = await Food.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
