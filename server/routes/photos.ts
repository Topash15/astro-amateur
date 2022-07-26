import express from 'express';
import controller from '../controllers/photos';

const router = express.Router();

router.get('/get/photos', controller.getAllPhotos);
router.post('/post/photos', controller.createPhoto)

export default router;