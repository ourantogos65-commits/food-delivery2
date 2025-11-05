import { FoodCategory } from "../models/Foodcategory";


export const getFoodCategory = async (req, res) => {
  try {
    const result = await FoodCategory.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const createfoodCategory = async (req, res) => {
  const { body } = req;
  try {
    const result = await FoodCategory.create(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const updateFoodCategory = async (req, res) => {
  const { id } = await req.params;
  const { body } = req;

  try {
    const result = await FoodCategory.findByIdAndUpdate(id, body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const deleteFoodCategory = async (req, res) => {
  const { id } = await req.params;
  try {
    const result = await FoodCategory.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
