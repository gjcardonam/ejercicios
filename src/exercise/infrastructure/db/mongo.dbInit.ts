import { connect } from "mongoose";

const DB_URI = 'mongodb://127.0.0.1:27017/NimbusRiseBD'

const dbInit = async () => {
    try {
        await connect(DB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

export default dbInit;

