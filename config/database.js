import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: `postgres://axtuwmnt:Ur1SxBS3IBkoMUyK4znduJCkokSzPwol@snuffleupagus.db.elephantsql.com/axtuwmnt`,
});

export default pool;
