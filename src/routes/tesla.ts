import { Router} from "express";
import DataInterface from "../data";

const router = Router();


router.get('/tesla', async (req, res) => {

  const units: number[] = [350000, 499550, 750000];


  const Y2019: DataInterface = {
    lessCarbonEmissions: "5000MT",
    totalUnits: units[0],
    percentage: 10,
  }

  const Y2020: DataInterface = {
    lessCarbonEmissions: "5000MT",
    totalUnits: units[1],
    percentage: 10,
  }

  const Y2021: DataInterface = {
    lessCarbonEmissions: "5000MT",
    totalUnits: units[2],
    percentage: 10,
  }

  const AllData = {
    2019: Y2019,
    2020: Y2020,
    2021: Y2021
  }

  await res.json([AllData]);
})

export default router;