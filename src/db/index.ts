import { Pool } from "pg";

import dotenv from "dotenv";

//Initialize ENV Variables
dotenv.config();
const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASS;
const HOST = process.env.DB_HOST;
const PORT = Number(process.env.DB_PORT);
const DATABASE = process.env.DB_NAME;
const CONNSTRING = process.env.DB_STRING;

//Initialize DB Connection (Params)
const pool = new Pool({
  user: USERNAME,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
});

//Initialize DB Connection (URL)
// const pool = new Pool({
//   connectionString: DBCONN,
// });

/* Query Functions */
//Callback Query
const cbquery = (text: any, params: any, callback: any): any => {
  return pool.query(text, params, callback);
};
//Promise Query
const query = (text: any, params: any): any => {
  return pool.query(text, params);
};
/* End Query Functions */

export default { pool, query, cbquery };
