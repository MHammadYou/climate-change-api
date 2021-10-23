import { Router } from "express";


const router = Router();


router.get('/geothermal', (req, res) => {
  res.send("GeoThermal");
})


export default router;
