import clientRepository from "../repositories/client.repository";

const createClient = async (data) => {
  let client = await clientRepository.insertClient(data);
  return client;
};

export default { createClient };
