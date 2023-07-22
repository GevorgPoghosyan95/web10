import express from 'express';
import ClientController from "../controllers/client.controller";
import ValidationMiddleware from "../middlewares/validator";

const router = express.Router();

router.get('/:id',
    ClientController.get);

router.post('/',ValidationMiddleware.validate,
    ClientController.create);

export default router;