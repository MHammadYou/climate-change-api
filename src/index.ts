import express from "express";
import dotenv from "dotenv";

import { teslaRoute } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/', teslaRoute);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));