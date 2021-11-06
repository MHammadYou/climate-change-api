import { Router } from "express";
import DataInterface, { co2PerKwh } from "../data";


const router = Router();

router.get('/nuclear', (req, res) => {
  const totalPlants = 440;
  const energyPerPlant = 1000000 // kwH

  const data: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(totalPlants * energyPerPlant / co2PerKwh * 10)}MT`,
    totalUnits: totalPlants,
    percentage: 19.3
  }

  res.json(data);
})


export default router;