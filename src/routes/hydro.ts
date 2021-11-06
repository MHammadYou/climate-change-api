import { Router } from "express";
import DataInterface, { co2PerKwh } from "../data";


const router = Router();


router.get('/hydro', (req, res) => {

  const elecProd = 30000 * 1000000000 ; // in kwh
  const hydroProd = elecProd / 16.6;


  const data: DataInterface = {
    lessCarbonEmissions: `~${Math.trunc(hydroProd / co2PerKwh * 10)}MT`,
    totalUnits: 60000,
    percentage: 16.6
  }

  res.json(data);
})


export default router;