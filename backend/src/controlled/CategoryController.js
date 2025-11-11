import { Category } from "../models/Category.js";

export const getCategory = async (req, res) => {
  try {
    const result = await Category.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
    ]);
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const CreateCategory = async (req, res) => {
  const { body } = req;
  try {
    const result = await Category.create(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const UpdateCategory = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const result = await Category.findByIdAndUpdate(id, body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
export const DeleteCategory = async (req, res) => {
  const { id } = await req.params;
  try {
    const result = Category.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
