import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
}
