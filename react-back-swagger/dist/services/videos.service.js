"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let videos = [
    {
        id: 1,
        title: 'Pimer Video',
        description: 'Primer video de la lista',
        url: 'https://www.youtube.com/watch?v=qemG0CWOx1I&ab_channel=seanwasereytbe'
    }
];
exports.default = {
    getVideos: () => {
        return videos;
    },
    getVideo: (id) => {
        return videos.filter((v) => v.id === id);
    }
};
//# sourceMappingURL=videos.service.js.map