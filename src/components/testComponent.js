import React, { useState, useEffect } from 'react';
// import { fetchBandMembers } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import BandBox from './bandComponent';



const mapDispatchToProps = {

    // fetchBandMembers
    
}
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

             const members = await fetch(`https://gigitv2.herokuapp.com/bands/${id}`, {
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

        fetchBandMembers(5);
    }, [])

    if(bandMembers.data) {
        return (
            <>
                <BandBox band={band}/>
                <div className="container">
                    <div className="row members-list-container">
                        {bandMembers.data.map(member => {
                            console.log(member)
                            return (
                                <div className="card col-6 member-box" style={{width: "18rem;"}}>
                                    <img className="card-img-top" src={`https://gigitv2.herokuapp.com/${member.image}`} alt="Card image cap" />
                                    <div className="card-body p-2">
                                        <h5 className="member-name">{member.artistname} <span >{member.instrument}</span></h5>
                
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </>
        )
    }
    else {

        return (
           <div>No data</div>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Test);
