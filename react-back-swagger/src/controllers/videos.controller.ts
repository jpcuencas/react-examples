import { RequestHandler } from 'express';
import { Get, Route } from "tsoa";
import videosService from '../services/videos.service';

@Route("videos/:id")
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
@Route("videos")
export const getVideos: RequestHandler = (req: any, res: any) => {
    try {
        let result = videosService.getVideos();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}