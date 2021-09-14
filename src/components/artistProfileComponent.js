import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import { editBand, loginSuccessful, logoutUser } from '../redux/ActionCreators';
const mapDispatchToProps = {
    editBand,
    loginSuccessful,
    

}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}


const Profile = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [description, setDescription] = useState('');
    const [lineup, setLineup] = useState(0);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState(0);
    const [sound, setSound] = useState(true);
    const [formControl, setControl] = useState(true);
    const [placeHolder, setPlaceHolder] = useState('input-profile-disable');
    const [subscriber, setSebscriber] = useState(null);
    const [file, uploadFile] = useState(null);
    useEffect(() => {
        
        setSebscriber(props.bands.user.user);
        // props.loginSuccessful()
        
        // console.log(props.bands.user.user);

    }, [])

   function handleClick() {
        const data = {
            email,
            password,
            name,
            style,
            description,
            lineup, 
            country,
            city,
            zipcode,
            sound
        }
        console.log(data)
}
    const client = subscriber || props.bands.user.user;
    if (!client) {
        return (       
                <div className="center-screen-loadingGif">
                   <h5>You are not logged in...</h5> 
                    <div>
                        <Link to="/login">
                            <Button className="btn-form-starter mr-2" style={{minWidth: "90px", backgroundColor: "#EE5407"}}>
                                Log-in
                            </Button>
                        </Link>
                        <Link to="/home">
                            <Button className="btn-form-starter" style={{minWidth: "90px", backgroundColor: "#EE5407"}}>
                                Sign-up
                            </Button>
                        </Link>
                    </div>
                </div>  
        )
    }
    if (props.bands.user.loading) {
        return (
            <Loading />
        )
    } else {

    
    return (
        <div style={{display: props.displayBandForm}} className="container mt-5 p-5">
        <form enctype="multipart/form-data" action="http://192.168.1.82:3001/upload" method="post">
                    <div>
                        <input type="file" name="image" 
                            onChange={(e) => uploadFile(e.target.files[0])}
                        />
                        <input type="text" />
                        <button type="submit" >Submit</button>
                    </div>
            </form>
            {/* <Form>
                <Row>
                </Row>
                <fieldset disabled={formControl}>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label htmlFor="emailIn">Email</Label>
                            <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="email" id="emailIn" placeholder={client.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>

                    </Col>
                </Row>
                    <FormGroup>
                        <Label htmlFor="nameIn">Name</Label>
                        <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="name" id="nameIn"placeholder={client.name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                            <Label htmlFor="eventRecruiterIn">Type of music</Label>
                            <Input className="input-profile-disable " style={{backgroundColor: formControl ? 'rgb(28, 71, 71)' : 'white'}} type="select" name="event" id="eventRecruiterIn" 
                                onChange={(e) => setStyle(e.target.value)}
                            >
                            <option value={client.style}>{client.style}</option>
                            <option value="Blues">Blues</option>
                            <option value="Latino music">Latino music</option>
                            <option value="Country">Country</option>
                            <option value="Rap">Rap</option>
                            <option value="Reggae">Reggae</option>
                            <option value="jazz">Jazz</option>
                            </Input>
                        </FormGroup>
                    <FormGroup>
                        <Label htmlFor="descIn" >Description</Label>
                        <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="textarea" name="style" id="descIn" placeholder={client.description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="lineupIn">Line-up</Label>
                            <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="number" name="lineUp" id="lineupIn" placeholder={client.lineup} 
                                onChange={(e) => setLineup(e.target.value)}
                            />
                        </FormGroup>

                        
                    </Col>
                    <Col md={4} className="my-auto offset-2">
                        <FormGroup style={{marginLeft: 20}}> 
                            <Label>
                                <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="checkbox" name="sound" checked={client.sound}
                                    onChange={(e) => setSound(e.target.checked)}
                                    
                                />
                                Reliable sound system
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>

                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="countryIn" >Country</Label>
                            <Input className="input-profile-disable" style={{backgroundColor: formControl ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="style" id="countryIn" placeholder={client.country} 
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="cityIn" >City</Label>
                            <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="style" id="cityIn" placeholder={client.city} 
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="zipcodeIn">Zip-code</Label>
                            <Input className="input-profile-disable" style={{backgroundColor: formControl  ? 'rgb(28, 71, 71)' : 'white'}} type="number" name="zipCode" id="zipcodeIn" placeholder={client.zipcode} 
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Link to="/home" className="button-form-center col-lg-1 col-md-2 col-3 ml-3" style={{display: formControl ? 'none' : 'block', textAlign: "center"}}> 
                        Home
                    </Link>
                    <Button style={{display: formControl ? 'none' : 'block'}} className="form-submit-btn col-lg-1 col-md-2 col-2 offset-4 offset-md-8 mr-2"
                            onClick={() => handleClick()}
                        >
                        Save
                    </Button>
                    <Button style={{display: formControl ? 'none' : 'block'}} className="col-lg-1 col-md-2 col-2 cancel-delete-btn"
                            onClick={() => setControl(true)}
                    >      
                        Cancel
                    </Button>


                </Row>
                    </fieldset>
            </Form>
                <Row>
                    <Link to="/home" className="button-form-center col-lg-1 col-md-2 col-3 ml-3 " style={{display: !formControl ? 'none' : 'block', textAlign: "center"}}> 
                        Home
                    </Link>
                    <Button 
                        className="form-submit-btn col-lg-1 col-md-2 col-2 offset-4 offset-md-9 mr-2"
                        style={{display: !formControl ? 'none' : 'block'}}
                        onClick={() => setControl(false)}
                    >
                        Edit
                    </Button>


                </Row> */}
        </div>
    )}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

        // {name, style, lineup, zipcode, sound}
   