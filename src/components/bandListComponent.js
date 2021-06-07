import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBands } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

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
        name: 'HAMZA',
        style: ['ROCK', 'BLUES'],
        email: 'asba@gmail.com',
        description: 'bla bla bla and also why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        instruments: ['GUITAR', 'DRUMS', 'KEYBOARD', 'VOCALS'],
        state: "Washington",
        zipcode: 34532,
        sound: true
    },
    {
        id:1,
        image:'https://i.postimg.cc/pd5RNwrM/resume-Photo.jpg',
        background: 'https://i.postimg.cc/kgCznDcc/MBackground.jpg',
        name: 'hamzssa',
        style: ['JAZZ', 'POP'],
        email: 'asbsa@gmail.com',
        description: 'bla bla bla and alsoggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg fghfgghfrdgh dfghdfghdfgh  why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        instruments: ['GUITAR', 'DRUMS', 'KEYBOARD', 'VOCALS'],
        state: "Utah",
        zipcode: 34532,
        sound: false
    },
    {
        id:1,
        image:'https://i.postimg.cc/pd5RNwrM/resume-Photo.jpg',
        background: 'https://i.postimg.cc/kgCznDcc/MBackground.jpg',
        name: 'hamzssa',
        style: ['PUNK', 'ROCK'],
        email: 'asbsa@gmail.com',
        description: 'bla bla bla and also why not bleu bleu or Blue BLue? may be not bleu, because it should be a band musical experience, maybe discography...',
        country: 'USA',
        city: 'Tracy',
        lineup: 4,
        instruments: ['GUITAR', 'DRUMS', 'KEYBOARD', 'VOCALS'],
        state: "California",
        zipcode: 34532,
        sound: true
    }
]
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
const BandBox = props => {

    
    const {band} = props
    const [boxBtns, adjustBorders] = useState('teal');
    return (
                <div className="media p-2 m-3 band-box" style={{border: `solid 1px ${boxBtns}`}} onMouseOver={() => adjustBorders('rgb(2, 234, 241)')} onPointerOut={() => adjustBorders('rgb(37, 118, 121)')}>
                    <img src={band.image} style={{width: 200, borderRadius: 5, filter: 'drop-shadow(2px 1px 8px #000)'}} />
                    <div className="ml-4 text-align ">
                        <div className="row mb-4">
                            <h2 className="col-6 col-md-4">{band.name.toUpperCase()}</h2>
                            <div className="col-md-2 col-12 band-style-container offset-lg-6 ">
                                {/* {band.style.map(st => {
                                return (
                                    <div className="band-style-box">{st}</div>
                                )
                                })} */}
                                {band.style}
                            </div>

                        </div>
                        <p>{band.description}</p>
                        {/* <div className="instruments-container" style={{marginBottom: 5, marginTop: 15}}>
                            {band.instruments.map(st => {
                                return (
                                    <div className="band-instrument-box">{st}</div>
                                )
                            })}
                            <div style={{minWidth: "200px", backgroundColor: band.sound ? "teal" : "rgb(35, 62, 63)"}} className="band-instrument-box  offset-4">{band.sound ? 'Sound system available' : 'Sound system not available'}</div>  
                        </div> */}
                        <div className="row">

                            <div className="band-location-container col-md-6 col-6" >{band.city.toUpperCase()}<span style={{marginLeft: 20, marginRight: 4}}>{band.state}</span><span>{band.zipcode}</span></div>
                        </div>
                    
                        <div className="flex-row-start" style={{position: 'absolute', bottom: '6px', right:0}}>
                            <div className="flex-row-start" >
                                <button className="btn-band-box" style={{border: `solid 1px ${boxBtns}`}}><i class="fa fa-1x fa-id-badge mr-1"></i>Profile</button>
                                <button className="btn-band-box" style={{border: `solid 1px ${boxBtns}`}}><i class="fa fa-1x fa-star mr-1"></i>Favorite</button>
                                <button disabled className="btn-band-box" style={{backgroundColor: "rgb(35, 62, 63)", border: "none"}}><i class="fa fa-1x fa-address-book mr-1"></i>Book</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}

function BandList(props) {
    const [bands, getData] = useState([]);
    
    useEffect(() => {
        props.fetchBands()
         .then(getData(props.bands.bands.bands.data))
        // console.log(props.bands);
        // console.log(props.bands.bands.bands.data);
        // console.log(props.bands.bands.isLoading)
        // console.log(props.bands.bands.errMess)
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
                    {bands || props.bands.bands.bands.data .map((band, i) => {
                        return (
                            <BandBox key={i} band={band} />
                        )
                    })}
                </div>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);



