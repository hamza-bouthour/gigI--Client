import React, { useState } from 'react'
import urls from '../config';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';


const mapStateToProps = (bands) =>{
    return {
        bands,
    }
}

const axios = require("axios");

function UploadForm(props) {

    const [file, setFile] = useState(null);
    const history = useHistory();
   function onFormSubmit(e){

    console.log(props.bands.bandReducer.bandId)
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('bandId', props.bands.bandReducer.bandId)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(urls.uploadUrl, formData, config)
            .then(response => console.log(response))
            .then(response => history.push('/bands'))
            .catch((error) => {
                new Error(error.message);
        });
    }
        return (
            <div>
                <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" alt="cover-header"/>
                <div className="container upload-form-container">
                    <form onSubmit={(e) => onFormSubmit(e)} className="">
                        <input type="file" name="image" onChange= {(e) => setFile(e.target.files[0])} />
                        <button type="submit">Upload</button>
                    </form>
                </div>
            </div>
        )
    
}

export default connect(mapStateToProps)(UploadForm);