import { Router } from "express";


const router = Router();


router.get('/windmill', async (req, res) => {
  res.send("Windmill");
})

export default router;