import React, { useState } from 'react';
import ArtistFrom from './artistFormComponent';


const Home = props => {
    const [formDisplay, setFormDisplay] = useState('none');
    return (
        <div style={{padding: 5}}>
            <div className="jumbotron jumbotron-header mx-auto mt-5 mt-md-2">
                <h3>Welcome to Gig In Town</h3>
                <h6 style={{marginLeft: 80}}>Git In Town is a platform made for artists to connect with people seeking to celebrate an event or simply enjoy some good time music.</h6>    
            </div>
            <div className="container">
                <div className="row mb-5">
                    <button className="col-3 offset-1 btn-form-starter"
                        onClick={() => {
                            formDisplay === 'none' ? setFormDisplay('block') : setFormDisplay('none')
                        }}
                    >
                       New artist?
                    </button>
                    <button className="col-3 offset-4 btn-form-starter">
                        First time hiring?
                    </button>
                </div>

            </div>
            <div className="form-container">

                <ArtistFrom display={formDisplay}/>
            
            </div>
        
        </div>
    )
}

export default Home;