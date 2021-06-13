import { RequestHandler } from 'express';
import videosService from '../services/videos.service';

export const getVideo: RequestHandler = (req: any, res: any) => {
    console.log(req.params);
    try {
        let result = videosService.getVideo(req.params.id);

        if(result!) return res.status(204).json();
        return res.json(result);
    } catch (error) {
        res.json(error);
    }
}

export const getVideos: RequestHandler = (req: any, res: any) => {
    try {
        let result = videosService.getVideos();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}