import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBands, deleteBand } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import BandBox from './bandComponent';
import BandsNavigation from './bandsNavigation';
import SearchBar from './searchBarHomeComponent';

const mapDispatchToProps = {
    // fetchBands,
    deleteBand
}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}


function addStyle (band) {
    const bandBoxStyle = {
        border: 'solid 3px #EE5407',
        color: '#fff',
        borderRadius: 5,
        position: 'relative'
        // backgroundImage: `url(${band.background})`,
        
    }
    return bandBoxStyle

}

function BandList(props) {
    const [bands, getData] = useState([]);
    const [photos, getPhotos] = useState([]);
    
    useEffect(() => {
        if (props.bands.bands.searchBands.length == 0) {
             getData(props.bands.bands.bands)
             getPhotos(props.bands.bands.photos)
            console.log(bands)

        }
         else {
             getData(props.bands.bands.searchBands)
             console.log(bands + 'bands')
            }
       
},[bands])

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
                <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" />
                <div className="container">
                    <BandsNavigation />
                    <SearchBar />
                    <div className="bands-container">
                        {bands.map((band, i) => {
                
                            return (
                                    <BandBox key={i} band={band}/>

                            )
                        })}
                        {/* {photos.map(p => {
                            return (
                                // <img src="" />
                                <h1>img</h1>
                            )
                        })} */}
                    </div>
                </div>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);



