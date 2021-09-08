const Validator = require("Validator");
import clientService from "../services/client.service";

export const validateClientRequestBody = (req, res, next) => {
  let data = req.body;

  const rules = {
    name: "required|string|max:255",
    cpf: "required|string|max:14",
    phone: "required|string|max:25",
    email: "required|email|max:50",
    address: "required|string|max:255",
  };

  const validate = Validator.make(data, rules);

  if (validate.fails()) {
    const validateError = validate.getErrors();
    const result = {
      success: false,
      message: "Dados inválidos",
      error: validateError,
    };
    logger.error(`POST /client - ${JSON.stringify(result)}`);
    res.status(400).send(result);
  } else {
    next();
  }
};

const createClient = async (req, res, next) => {
  let data = req.body;
  logger.info(`POST /client - ${JSON.stringify(data)}`);
  let client = await clientService.createClient(data);
  res.status(201).send(client);
};

const getClients = async (req, res, next) => {
  try {
    let clients = await clientService.getClients();
    res.status(200).send(clients);
  } catch (error) {
    next(error);
  }
};

const getClient = async (req, res, next) => {
  const id = req.params.id;
  try {
    let client = await clientService.getClient(id);
    if (!client) {
      res.status(404).send({ message: "Cliente não encontrado" });
    }
    res.status(200).send(client);
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const client = await clientService.updateClient({ id, data });
    if (!client) {
      res.status(404).send({ message: "Cliente não encontrado" });
    }
    res.status(200).send(client);
  } catch (error) {
    next(error);
  }
};

const deleteClient = async (req, res, next) => {
  const id = req.params.id;
  try {
    const client = await clientService.deleteClient(id);
    if (!client) {
      res.status(404).send({ message: "Cliente não encontrado" });
    }
    res.status(200).send({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    next(error);
  }
};

export default {
  validateClientRequestBody,
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
