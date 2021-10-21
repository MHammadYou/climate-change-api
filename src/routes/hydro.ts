import { Router } from "express";


const router = Router();


router.get('/hydro', (req, res) => {
  res.send("Hydro Power");
})


export default router;