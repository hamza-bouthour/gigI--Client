import React, { Component } from 'react';
import Row from 'reactstrap/lib/Row';
import bandsUrl from '../config';

const BandBox = props => {

    
    const {band} = props
    return (
            <div style={{marginLeft: 20}}>
                <h3>{band.name}</h3>
                <p>{band.style}</p>
                <p>{band.email}</p>
                <p>{band.description}</p>
                <p>{band.country}</p>
                <p>{band.city}</p>
                <p>{band.lineup}</p>
                <p>{band.zipcode}</p>
                <p>{band.sound}</p>
            </div>
    )
}
class BandList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bands: []
        }
    }

    componentDidMount() {
        fetch(bandsUrl, {
            method: 'GET', 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({
                bands: response.data
            }))
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    render() {
        return (
            <div>
               <h2>BandList</h2>
                    <div className="band-container">
                        {this.state.bands.map((band, i) => {
                            return (
                                <BandBox key={i} band={band}/>
                            )
                        })}
                    
                    </div>
            </div>
        )
    }
}
// const BandList = props => {
//     const [bands, getData] = useState([]);
//     useEffect(() => {
//         fetch(bandsUrl, {
//             method: 'GET', 
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//             })
//             .then(response => response.json())
//             .then(response => console.log(response.data[0]))
//             .then(response => getData(response))
//             // .then(console.log(bands))
//             .catch((error) => {
//             console.error('Error:', error);
//         });
//     }, [])
//     return (
//         <div>
//            <h2>BandList</h2>
 
//         </div>
//     )
// }

export default BandList;

// const bandExample = [{
//         bandName: 'Metallica',
//         bandStyle: 'Heavy metal',
//         bandImg: 'https://i.postimg.cc/SRZHDPKz/img4.jpg',
//         bandLineUp: 4,
//         bandSound: true,
//         bandZipCode: 95376
//     },
//     {
//         bandName: 'Nirvana',
//         bandStyle: 'Punk Rock',
//         bandImg: 'https://i.postimg.cc/SRZHDPKz/img4.jpg',
//         bandLineUp: 5,
//         bandSound: true,
//         bandZipCode: 84020
//     },
// ];