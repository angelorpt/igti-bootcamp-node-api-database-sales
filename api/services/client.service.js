import clientRepository from "../repositories/client.repository";

const createClient = async (data) => {
  let client = await clientRepository.insertClient(data);
  return client;
};

const getClients = async () => {
  return await clientRepository.getClients();
};

const getClient = async (id) => {
  return await clientRepository.getClient(id);
};

const updateClient = async ({ id, data }) => {
  return await clientRepository.updateClient({ id, client: data });
};

const deleteClient = async (id) => {
  return await clientRepository.deleteClient(id);
};

export default {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
