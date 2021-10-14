import { Router} from "express";
import DataInterface from "../data";

const router = Router();


router.get('/tesla', async (req, res) => {

  const totalUnits = 2000000;
  const singleVehicleEmission = 4.6; // Metric Ton

  const data: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(totalUnits * singleVehicleEmission)}MT`,
    totalUnits,
    percentage: 0.4
  }

  await res.json(data);
})


router.get('/tesla/:year', async (req, res) => {

  const units: number[] = [350000, 849550, 1599550];
  const singleVehicleEmission = 4.6; // Metric Ton
  const year: number = parseInt(req.params.year);

  const Y2019: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(units[0] * singleVehicleEmission)}MT`,
    totalUnits: units[0],
    percentage: 0.17,
  }

  const Y2020: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(units[1] * singleVehicleEmission)}MT`,
    totalUnits: units[1],
    percentage: 0.43,
  }

  const Y2021: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(units[2] * singleVehicleEmission)}MT`,
    totalUnits: units[2],
    percentage: 0.81,
  }

  switch (year) {
    case 2019:
      res.json(Y2019);
      break;
    case 2020:
      res.json(Y2020);
      break;
    case 2021:
      res.json(Y2021);
      break;
    default:
      res.json({"error": "No data found"})
  }
})

export default router;