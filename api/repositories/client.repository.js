import { connect } from "./database";

const insertClient = async (client) => {
  const conn = await connect();
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
};

export default { insertClient };
