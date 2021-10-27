import { Router } from "express";
import Data from "../data";

const router = Router();


router.get('/windmill', async (req, res) => {

  // 402,000 kWh per month
  const singleTurbineEnergy = 402000 * 12;

  const co2PerKwh = 0.92;
  const totalWindMills = 341000;

  const totalEnergyInAMonth = totalWindMills * singleTurbineEnergy;
  const lessCo2InAYear = totalEnergyInAMonth * 12 / co2PerKwh;



  const data: Data = {
    lessCarbonEmissions: `~${Math.trunc(lessCo2InAYear * 10)}MT`,
    totalUnits: totalWindMills,
    percentage: 8.4
  }

  res.json(data);

})

export default router;