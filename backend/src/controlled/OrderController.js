import { Order } from "../models/Ordermodel.js";


export const getFoodOrder = async (req, res) => {
  try {
    const result = await Order.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const createFoodOrder = async (req, res) => {
  const { body } = req;
  try {
    const result = await Order.create(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const updateFoodOrder = async (req, res) => {
  const { id } = await req.params;
  const { body } = req;

  try {
    const result = await Order.findByIdAndUpdate(id, body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const deleteFoodOrder = async (req, res) => {
  const { id } = await req.params;
  try {
    const result = await Order.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
