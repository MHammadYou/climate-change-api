import { Router } from "express";


const router = Router();

router.get('/nuclear-energy', (req, res) => {
  res.send("Nuclear Energy");
})


export default router;