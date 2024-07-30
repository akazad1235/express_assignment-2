import dotenv from 'dotenv';
import path from 'path';

//current working directory with .env
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.SALT_WORK_FACTOR,
};
