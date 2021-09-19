import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BandBox from './bandComponent';


const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}

const Test = props => {
    
    const [bandMembers, setbandMembers] = useState([])
    const {band} = props;
  
    useEffect(() => {
        const fetchBandMembers = async (id) => {
            const members = await fetch(`http://192.168.1.82:3001/bands/${id}`, {
                method: 'GET', 
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })   
                .then(response => response.json())
                .catch((error) => {
                    new Error(error.message)
            });  
          setbandMembers(members)
        }
        fetchBandMembers(band.bandId);
    }, [bandMembers, band.bandId])

    if(bandMembers.data) {
        return (
            <div>
            <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/nhDwdHvx/band-Header.jpg" alt="cover-header"/>
                <div className="container">
                    <BandBox band={band}/>
                </div>
                <div className="container">
                    <div className="row members-list-container">
                        {bandMembers.data.map(member => {
                            return (
                                <div className="card col-6 member-box" style={{width: "18rem;"}}>
                                    <img className="card-img-top" src={member.image.length > 2 ? `http://192.168.1.82:3001/${member.image}` : 'https://i.postimg.cc/DfJNKW5s/download.jpg'} alt="cover-header" />
                                    <div className="card-body p-2">
                                        <h5 className="member-name">{member.artistname} <span >{member.instrument}</span></h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
           <div>No data</div>
        )
    }
}


export default connect(mapStateToProps)(Test);
