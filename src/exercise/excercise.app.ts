import "dotenv/config";
import express from "express";
import exerciseRoute from "./infrastructure/web/routes/exercise.routes";
import { dbInit } from "./infrastructure/db/mongo.dbInit";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(exerciseRoute);

const port = process.env.PORT || 3000;

dbInit().then();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;