import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Video from '../../models/Video';

const VideosForm = (props: any) => {
    const initialState = {
        id:0,
        title:'',
        description:'',
        url:''
    }
    const [video, setVideo] = useState<Video>(initialState)
    return (
        <form>
        <div className="container">
            <div className="row">
                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" id="title" 
                    placeholder="Example input placeholder" autoFocus />
                </div>
            </div>
            
            <div className="row">
                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput2" className="form-label">url</label>
                    <textarea name="description" id="description" className="form-control" placeholder="Some description"></textarea> 
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput2" className="form-label">url</label>
                    <input type="text" className="form-control" name="url" id="url" 
                    placeholder="http://site.es" />
                </div>
            </div>
            <button className="btn btn-primary">
                OK
            </button>
        </div>
        </form>
    )
}

VideosForm.propTypes = {

}

export default VideosForm

