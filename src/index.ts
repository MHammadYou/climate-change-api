import express from "express";
import dotenv from "dotenv";

import {teslaRoute, windMillRoute, solarPanelsRoute, hydroRoute, geoThermalRoute, nuclearRoute} from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/', teslaRoute);
app.use('/', windMillRoute);
app.use('/', solarPanelsRoute);
app.use('/', hydroRoute);
app.use('/', geoThermalRoute);
app.use('/', nuclearRoute);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
