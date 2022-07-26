import express from 'express';
import controller from '../controllers/photos';

const router = express.Router();

router.get('/get/photos', controller.getAllPhotos);
router.get('/get/photos/:id', controller.getPhotoById);
router.post('/post/photos', controller.createPhoto);
router.delete('/delete/photos/:id', controller.deletePhotoById);

export default router;