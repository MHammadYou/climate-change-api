import { Router} from "express";
import DataInterface from "../data";

const router = Router();


router.get('/tesla', (req, res) => {
  res.json({"msg": "Hello, World!"});
})

export default router;