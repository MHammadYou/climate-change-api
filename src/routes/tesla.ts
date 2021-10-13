import { Router} from "express";
import DataInterface from "../data";

const router = Router();


router.get('/tesla', async (req, res) => {





  //
  // const AllData = {
  //   2019: Y2019,
  //   2020: Y2020,
  //   2021: Y2021
  // }

  await res.json("Hola");
})


router.get('/tesla/:year', async (req, res) => {

  const units: number[] = [350000, 849550, 1599550];
  const singleVehicleEmission = 4.6; // Metric Ton
  const year: number = parseInt(req.params.year);

  const Y2019: DataInterface = {
    lessCarbonEmissions: parseInt(String(units[0] * singleVehicleEmission)) +"MT",
    totalUnits: units[0],
    percentage: 10,
  }

  const Y2020: DataInterface = {
    lessCarbonEmissions: parseInt(String(units[1] * singleVehicleEmission)) +"MT",
    totalUnits: units[1],
    percentage: 10,
  }

  const Y2021: DataInterface = {
    lessCarbonEmissions: parseInt(String(units[2] * singleVehicleEmission)) +"MT",
    totalUnits: units[2],
    percentage: 10,
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