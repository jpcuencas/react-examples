import { Router } from 'express';
import swaggerUi  from 'swagger-ui-express';
//import swaggerDocument from './swagger.json';


import * as videoCtrl from '../controllers/videos.controller';
const router = Router();

router.use('/api-docs', swaggerUi.serve);
//router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/videos', videoCtrl.getVideos);
router.get('/videos/:id', videoCtrl.getVideo);


export default router;