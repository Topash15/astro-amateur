import express from 'express';
import controller from '../controllers/photos';

const router = express.Router();

router.get('/get/photos', controller.getAllPhotos);

export default router;