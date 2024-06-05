const Pool = require("pg").Pool;
const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;

const pool = new Pool({
  user: POSTGRES_USERNAME,
  host: "localhost",
  database: "vacation_attractions",
  password: POSTGRES_PASSWORD,
  port: 5432,
});
