import express from 'express';
import { carController } from './car.controller';

const router = express.Router();

router.post('/', carController.createCar);
router.get('/', carController.getAllCar);
router.get('/:carId', carController.getASingleCar);
router.put('/:carId', carController.updateASingleCar);
router.delete('/:carId', carController.deleteASingleCar);

export const carRouter = router;
