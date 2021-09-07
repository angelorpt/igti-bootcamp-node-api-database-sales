const Validator = require("Validator");

export const validateClientRequestBody = (req, res, next) => {
  let data = req.body;

  const rules = {
    name: "required|string|max:255",
    cpf: "required|numeric",
    phone: "required|string|max:25",
    email: "required|email|max:50",
    address: "required|string|max:255",
  };

  const validate = Validator.make(data, rules);

  if (validate.fails()) {
    const error = validate.getErrors();
    const result = {
      success: false,
      message: "fail",
      error,
    };
    res.status(400).send(result);
  } else {
    next();
  }
};

const createClient = (req, res, next) => {
  let data = req.body;
  res.status(200).send(data);
};

export default { createClient, validateClientRequestBody };
