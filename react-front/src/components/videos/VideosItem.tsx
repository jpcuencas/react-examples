import React from 'react';
import PropTypes from 'prop-types';
import Video from '../../models/Video';

interface Props {
    video:Video
}
const VideosItem = ({video}: Props) => {
    console.log('-----------------')
    console.log(video);    
    console.log('-----------------')
    return (
        <tr>
            <td>{video?.id}</td>
            <td>{video?.title}</td>
            <td>{video?.description}</td>
            <td>{video?.url}</td>
        </tr>
    )
};


export default VideosItem;

