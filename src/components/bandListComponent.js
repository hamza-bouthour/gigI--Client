import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteBand } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import BandBox from './bandComponent';
import BandsNavigation from './bandsNavigation';
import SearchBar from './searchBarHomeComponent';

const mapDispatchToProps = {
    deleteBand
}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}

function BandList(props) {

    const [bands, getData] = useState([]);
    
    useEffect(() => {
        if (props.bands.bands.searchBands.length === 0) {
             getData(props.bands.bands.bands)
        }
         else {
             getData(props.bands.bands.searchBands)
            }  
    },[props, bands])

    if (props.bands.bands.isLoading) {
        return (
            <Loading />
        )
    }
    if  (props.bands.bands.errMess) {
        return (
            <h3>{props.bands.bands.errMess}</h3>
        )
    }
    return ( 
        <div>
            <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" alt="cover-header"/>
            <div className="container">
                <BandsNavigation />
                <SearchBar />
                <div className="bands-container">
                    {bands.map((band, i) => {
                        return (
                            <BandBox key={i} band={band}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(BandList);



