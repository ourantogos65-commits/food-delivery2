import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.body.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "token is required" });
  }

  const BearerTokon = token.splite(" ")[1];

  try {
    const decoded = jwt.verify(BearerTokon, "secret-key");
    req.body.decoded = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ message: "Invalid token", error });
  }
};
