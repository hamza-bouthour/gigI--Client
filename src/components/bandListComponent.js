import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBands } from '../redux/ActionCreators';
import Loading from './LoadingComponent'

const mapDispatchToProps = {
    fetchBands
}
const mapStateToProps = (bands) =>{
    return {
        bands
    }
}

const dataExample = [
    {
        id:0,
        image: 'https://i.postimg.cc/pd5RNwrM/resume-Photo.jpg',
        background: 'https://i.postimg.cc/kgCznDcc/MBackground.jpg',
        name: 'hamza',
        style: 'rock',
        email: 'asba@gmail.com',
        description: 'bla bla bla and also why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        zipcode: 34532,
        sound: true
    },
    {
        id:1,
        image:'https://i.postimg.cc/pd5RNwrM/resume-Photo.jpg',
        background: 'https://i.postimg.cc/kgCznDcc/MBackground.jpg',
        name: 'hamzssa',
        style: 'rock',
        email: 'asbsa@gmail.com',
        description: 'bla bla bla and also why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        zipcode: 34532,
        sound: true
    },
    {
        id:1,
        image:'https://i.postimg.cc/pd5RNwrM/resume-Photo.jpg',
        background: 'https://i.postimg.cc/kgCznDcc/MBackground.jpg',
        name: 'hamzssa',
        style: 'rock',
        email: 'asbsa@gmail.com',
        description: 'bla bla bla and also why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        zipcode: 34532,
        sound: true
    }
]
function addStyle (band) {
    const bandBoxStyle = {
        border: 'solid 1px darkblue',
        color: 'black',
        borderRadius: 5,
        // backgroundImage: `url(${band.background})`,
        
    }
    return bandBoxStyle

}
const BandBox = props => {

    
    const {band} = props
    return (
            <div className="media p-2 m-3" style={addStyle(band)}>
                <img src={band.image} style={{width: 200, borderRadius: 5}} />
                <div className="ml-4 text-align ">
                    <h2 className="text-center">{band.name}</h2>
                    <p>{band.description}</p>
                    <div className="band-info-box">
                        <p>Type: {band.style}</p>
                        <p>Contact: {band.email}</p>
                        <p>Country: {band.country}</p>
                        <p>City: {band.city}</p>
                        <p>Line-up: {band.lineup}</p>
                        <p>Zip-code: {band.zipcode}</p>
                        <p>{band.sound ? 'Sound system available' : 'Sound system not availble'}</p>  
                    </div>
                
                </div>
            </div>
    )
}

function BandList(props) {
    const [bands, getData] = useState([]);
    // useEffect(() => {
    //     props.fetchBands();
    //     console.log(props.bands);
    //     console.log(props.bands.bands.bands.data);
    //     console.log(props.bands.bands.isLoading)
    //     console.log(props.bands.bands.errMess)
    //     getData(props.bands.bands.bands.data)
    // },[])

        // if (props.bands.bands.bands.isLoading) {
        //     return (
        //         <Loading />
        //     )
        // }
        // if  (props.bands.bands.bands.errMess) {
        //     return (
        //         <h3>{props.bands.bands.bands.errMess}</h3>
        //     )
        // }
        return ( 
            <div className="container">
                <h2>BandList</h2>
                <div className="band-container">
                    {dataExample.map((band, i) => {
                        return (
                            <BandBox key={i} band={band}/>
                        )
                    })}
                </div>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);



