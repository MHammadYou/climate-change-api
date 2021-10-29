import { Router } from "express";
import DataInterface from "../data";


const router = Router();

router.get('/nuclear', (req, res) => {
  const co2PerKwh = 0.92;

  const data = {}

  res.json(data);
})


export default router;