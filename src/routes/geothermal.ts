import { Router } from "express";
import DataInterface from "../data";


const router = Router();


router.get('/geothermal', (req, res) => {

  const co2PerKwh = 0.92;
  const totalEnergy = 16.7; // kwh



  const data: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(totalEnergy / co2PerKwh * 10)}MT`,
    totalUnits: 200,
    percentage: 0.4
  }

  res.json(data);
})


export default router;
