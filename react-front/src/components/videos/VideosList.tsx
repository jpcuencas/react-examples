import React, { useEffect, useState } from 'react';
import Video from '../../models/Video';
import * as VideosService from '../../services/videosService';
import VideosItem from './VideosItem';
const VideosList = () => {
    const initialState: Video[] = [];
    const [videos, setVideos] = useState<Video[]>(initialState);

    const loadVideos = async() => {
        const res = await VideosService.loadVideos();
        setVideos(res);
        console.log(res);

    };
    useEffect( () => {
        console.log('works');
        loadVideos();
        return () => {
        };
    }, []);
    
   
    if(videos.length){

       return (
       <>
       <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">url</th>
          </tr>
        </thead>
        <tbody>
            { videos.map( v => {
                <VideosItem video= {v}/>
            })}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      </>
      );
    } else {
        return <p>Has no elements</p>;
    }
}

export default VideosList;