"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = exports.getVideo = void 0;
const videos_service_1 = __importDefault(require("../services/videos.service"));
const getVideo = (req, res) => {
    console.log(req.params);
    try {
        let result = videos_service_1.default.getVideo(req.params.id);
        if (result)
            return res.status(204).json();
        return res.json(result);
    }
    catch (error) {
        res.json(error);
    }
};
exports.getVideo = getVideo;
const getVideos = (req, res) => {
    try {
        let result = videos_service_1.default.getVideos();
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
};
exports.getVideos = getVideos;
//# sourceMappingURL=videos.controller.js.map