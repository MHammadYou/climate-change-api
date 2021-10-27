import { Router } from "express";
import DataInterface from "../data";


const router = Router();

router.get('/nuclear-energy', (req, res) => {
  res.send("Nuclear Energy");
})


export default router;