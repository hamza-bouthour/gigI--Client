import React, { useState } from 'react';
import ArtistFrom from './artistFormComponent';


const Home = props => {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-header mx-auto">
                <h3>Welcome to Gig In Town</h3>
                <h6 style={{marginLeft: 80}}>Git In Town is a platform made for artists to connect with people seeking to celebrate an event or simply enjoy some good time music.</h6>    
            </div>
            <div className="form-container">
                <ArtistFrom />
            
            </div>
        
        </React.Fragment>
    )
}

export default Home;