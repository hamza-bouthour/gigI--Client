import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBands, deleteBand } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import BandBox from './bandComponent';

const mapDispatchToProps = {
    fetchBands,
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
            
            // console.log(props.bands.bands.bands)
             getData(props.bands.bands.bands)
             getPhotos(props.bands.bands.photos)
            console.log(bands)

        }
         else {
             getData(props.bands.bands.searchBands)
             console.log(bands)
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
            <div className="container">
                <h2>BandList</h2>
                <div >
                    {bands.map((band, i) => {
                        return (
                            <Link  key={i} to={`bands/${band.band_id}`}>
                                <BandBox key={i} band={band}/>
                            </Link>
                        )
                    })}
                    {photos.map(p => {
                        return (
                            // <img src="" />
                            <h1>img</h1>
                        )
                    })}
                </div>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);



