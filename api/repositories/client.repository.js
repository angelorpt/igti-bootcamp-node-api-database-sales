import { connect } from "./database";

const insertClient = async (client) => {
  const conn = await connect();
  try {
    const sql = `INSERT INTO clients (name, cpf, phone, email, address) 
                              values ($1, $2, $3, $4, $5)
                 RETURNING *`;
    const values = [
      client.name,
      client.cpf,
      client.phone,
      client.email,
      client.address,
    ];
    const result = await conn.query(sql, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getClients = async () => {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM clients`;
    const result = await conn.query(sql);
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getClient = async (id) => {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM clients WHERE client_id = $1`;
    const values = [id];
    const result = await conn.query(sql, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateClient = async ({ id, client }) => {
  const conn = await connect();
  try {
    const sql = `UPDATE clients
                 SET  name    = $2
                     ,cpf     = $3
                     ,phone   = $4
                     ,email   = $5
                     ,address = $6
                 WHERE client_id = $1
                 RETURNING *`;
    const values = [
      id,
      client.name,
      client.cpf,
      client.phone,
      client.email,
      client.address,
    ];
    const result = await conn.query(sql, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteClient = async (id) => {
  const conn = await connect();
  try {
    const sql = `DELETE FROM clients WHERE client_id = $1`;
    const values = [id];
    const result = await conn.query(sql, values);
    return result.rowCount > 0;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

export default {
  insertClient,
  getClient,
  getClients,
  updateClient,
  deleteClient,
};
