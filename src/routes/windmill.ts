import { Router } from "express";

const router = Router();


router.get('/windmill', async (req, res) => {

  // 402,000 kWh per month
  const singleTurbineEnergy = 402000 * 12;

  /*
  * In 2019, total U.S. electricity generation by the electric power industry
  * of 4.13 trillion kilowatthours (kWh) from all energy sources resulted in
  * the emission of 1.72 billion metric tons—1.90 billion short tons—of
  * carbon dioxide (CO2). This equaled about 0.92 pounds of CO2 emissions per kWh.
  * */

  const co2PerKwh = 0.92;


  const data = {
    energyInKWH: singleTurbineEnergy
  }

  res.json(data);

})

export default router;