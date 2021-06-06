import Video from '../models/Video';

let videos: Video[] = [
    {
        id:1,
        title: 'Pimer Video',
        description:'Primer video de la lista',
        url:'https://www.youtube.com/watch?v=qemG0CWOx1I&ab_channel=seanwasereytbe'
    }
];

export default {
    getVideos: () => {
        return videos;
    },
    getVideo: (id: number) => {
        return videos.filter((v)=> v.id === id);
    }
}
