
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BandBox = props => {

    
    const {band} = props
    const [boxBtns, adjustBorders] = useState('teal');
    return (
            <Link  to={`bands/${band.band_id}`}>


                <div className="media p-2 m-3 band-box" style={{border: `solid 1px ${boxBtns}`}} onMouseOver={() => adjustBorders('rgb(2, 234, 241)')} onPointerOut={() => adjustBorders('rgb(37, 118, 121)')}>
                    <img src={band.image} style={{width: 200, borderRadius: 5, filter: 'drop-shadow(2px 1px 8px #000)'}} />
                    <div className="ml-4 text-align ">
                        <div className="row mb-4">
                            <h2 className="col-6 col-md-4">{band.name.toUpperCase()}</h2>
                            <div className="col-md-2 col-12 band-style-container offset-lg-6 ">

                                {band.style}
                            </div>

                        </div>
                        <p>{band.description}</p>

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
            </Link>
    )
}
export default BandBox;