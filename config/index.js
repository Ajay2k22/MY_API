import dotenv from 'dotenv';

dotenv.config()

export const {
    APP_PORT, DEBUG_MODE, JWT_SECRET, REFRESH_SECRET,APP_URL,DB
} = process.env;