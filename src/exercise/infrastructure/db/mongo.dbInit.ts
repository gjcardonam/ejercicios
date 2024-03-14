import { connect } from "mongoose";

// Asegúrate de reemplazar los valores de estas variables con tus credenciales reales
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD || ''); // Codifica caracteres especiales
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=NimbusRise`;

const dbInit = async () => {
    try {
        await connect(DB_URI);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

export { dbInit };
