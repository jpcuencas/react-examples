import { Router } from 'express';

import * as videoCtrl from '../controllers/videos.controller';
const router = Router();

router.get('/videos', videoCtrl.getVideos);
router.get('/videos/:id', videoCtrl.getVideo);


export default router;