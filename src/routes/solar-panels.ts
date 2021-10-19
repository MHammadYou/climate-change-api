import { Router } from "express";


const router = Router();


router.get('/solar', (req, res) => {
  res.send("Solar Panels");
})


export default router;