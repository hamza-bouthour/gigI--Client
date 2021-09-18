
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBands } from '../redux/ActionCreators';
import { Col, Row } from 'reactstrap';

const mapDispatchToProps = {
    fetchBands,
 
    
}
const mapStateToProps = (bands, user, band) =>{
    return {
        bands,
        user,
        // band
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




const BandBox = props => {

    const {band} = props
    const [boxBtns, adjustBorders] = useState('teal');

    return (
                <Row className="my-5 p-2">
                    <Col md={8}  className="band-box">
                        <h3 className="mb-1 band-box-name">{capitalize(band.name)}</h3>
                        <img  className="band-box-photo" style={{borderRadius: "5px", marginBottom: "5px"}} src={`http://192.168.1.82:3001/${band.image}`}/>
                        <div className="band-box-bottom">
                            <div className="band-box-buttons">
                                <Link to={`bands/${band.bandId}`}>
                                    <button className="btn-band-box"><i className="fa fa-1x fa-id-badge mr-1"></i>Profile</button>
                                </Link>
                                <Link to={`bands/${band.bandId}`}>
                                    <button className="btn-band-box"><i class="fa fa-1x fa-address-book mr-1"></i>Reserve</button>
                                </Link>
                                <button className="btn-band-box"><i className="fa fa-1x fa-star mr-1"></i>Add to favorites</button>
                                <button className="btn-band-box"><i className="fa fa-1x fa-dollar-sign"></i></button>

                            </div>
                        </div>
                        <div className="band-box-description-wrapper">
                            <p className="band-box-description">{band.description}</p>
                        </div>
                    </Col>
                    <Col className="band-details-container">
                        <h5>{band.city}</h5>
                        <ul className="band-details">
                            <li>{band.style}</li>
                            <li>{band.eventype.replace(/[',]+/g, '')}</li>
                            <li>${band.cost}</li>
                            <hr />
                            <li>{band.country}</li>
                            <li>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={band.sound === 0 ? false : true} />
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Sound system</label>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
           
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(BandBox);

 


