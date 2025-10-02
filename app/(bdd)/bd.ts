// db.ts
import { Pool, PoolConfig } from "pg";

const dataBase = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default dataBase;