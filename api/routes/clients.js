import express from "express";
import clientController, {
  validateClientRequestBody,
} from "../controllers/client.controller";

const router = express.Router();

router.get("/", clientController.getClients);
router.get("/:id", clientController.getClient);
router.post("/", validateClientRequestBody, clientController.createClient);
router.put("/:id", validateClientRequestBody, clientController.updateClient);
router.delete("/:id", clientController.deleteClient);

export default router;
