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

function BandList(props) {
    const [bands, getData] = useState([]);
    
    useEffect(() => {
        props.fetchBands()
        console.log(props.bands.user)
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
                    {props.bands.bands.bands.data.map((band, i) => {
                        return (
                            <Link  to={`bands/${band.band_id}`}>
                                <BandBox key={i} band={band}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);



