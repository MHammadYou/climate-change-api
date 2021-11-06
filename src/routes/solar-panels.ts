import { Router } from "express";
import DataInterface, { co2PerKwh } from "../data"


const router = Router();


router.get('/solar', (req, res) => {

  const SPEnergy1Year = 500; // kwh between 500 and 550
  const SPlessEmissions = SPEnergy1Year / co2PerKwh;
  const totalSPAprx = 1028400000;


  const data: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(SPlessEmissions * totalSPAprx * 10)}MT`,
    totalUnits: totalSPAprx,
    percentage: 2
  }

  res.json(data);
})


export default router;