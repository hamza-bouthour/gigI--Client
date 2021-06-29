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
    
    useEffect(() => {
        !props.bands.bands.searchBands ?  props.fetchBands() : getData(props.bands.bands.searchBands)
    },[])

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
                            <Link  key={i} to={`bands/${band.id}`}>
                                <BandBox key={i} band={band}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);



