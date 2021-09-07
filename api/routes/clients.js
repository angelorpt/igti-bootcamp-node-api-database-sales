import express from "express";
import clientController, {
  validateClientRequestBody,
} from "../controllers/client.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: true });
});

router.post("/", validateClientRequestBody, (req, res) => {
  clientController.createClient(req, res);
});

export default router;
