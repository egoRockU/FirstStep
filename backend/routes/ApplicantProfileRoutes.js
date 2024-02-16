import express from 'express';
const router = express.Router();

import {
  createController,
  deleteController,
  retrieveController,
  updateController
} from '../controllers/ApplicantProfileController.js';

router.post('/create', createController);
router.get('/retrieve', retrieveController);
router.post('/update', updateController);
router.post('/delete', deleteController);

export default router;
