import express from 'express';
import ClientController from "../controllers/client.controller";

const router = express.Router();

router.post('/create',
    ClientController.create);

export default router;