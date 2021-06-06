import axios from 'axios';
import Video from '../models/Video';

export const loadVideos = async ()=> {
    const res = await axios.get('http://localhost:8081/videos');
    console.log(res);
    return res.data;
};
