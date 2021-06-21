import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import urls from '../config';
import { connect } from 'react-redux';
import { addNewBand, addNewUser } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import { Link } from 'react-router-dom';

const mapDispatchToProps = {
    addNewBand,
    addNewUser
}
const mapStateToProps = (bands) =>{
    return {
        bands
    }
}

const FormRedirection = props => {
    return (
        <div>
            <h3>Account successfully created!</h3>
        </div>
    )
}

const ArtistForm = props => {
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
    const [loading, enableLoading] = useState(false);
    const [subscribed, enableSubscribe] = useState(false);
    const [image, setImage] = useState(null);

    const fetchNewBand = data => {
        props.addNewBand(data);
        props.addNewUser(data)
        enableLoading(true);
        fetch(urls.bandsUrl, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(response => {console.log(response)})
            .then(response => {
                    {
                    setTimeout(() => {
                        enableLoading(false)
                        enableSubscribe(true)
                    }, 3000)
                    
                }
            })
            .catch((error) => {
            console.error('Error:', error);
        });
       
    }
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
            sound,
            image
        }
   
        fetchNewBand(data);
  
    
}
    if (loading) {
        return (
            <Loading />
        )
    }
    if (subscribed) {
        return (
            <div className="container my-5"> 
                <div className="row">
                    <h3 className="mx-auto">Account successfully Created!</h3>
                </div>
                <div className="row my-3">
                    <div className="mx-auto">
                        <Link to="/bands" className="button-form-center">Bands</Link>
                        <Link to="/profile" className="button-form-center">Profile</Link> 
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{display: props.displayBandForm}} className="band-form">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="emailIn">Email</Label>
                            <Input type="text" name="email" id="emailIn" placeholder="band@gigit.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>

                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="pswIn">Password</Label>
                            <Input type="text" name="pswIn" id="pswIn" placeholder="at least 5 caracters" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                    <FormGroup>
                        <Label htmlFor="nameIn">Name</Label>
                        <Input type="text" name="name" id="nameIn" placeholder="at least 5 caracters" 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="imageIn">Im</Label>
                        <Input type="file" name="image" id="imageIn" placeholder="jpg" 
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </FormGroup>
                    <FormGroup>
                            <Label htmlFor="eventRecruiterIn">Type of music</Label>
                            <Input type="select" name="event" id="eventRecruiterIn" 
                                onChange={(e) => setStyle(e.target.value)}
                            >
                            <option value="Rock">Rock</option>
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
                        <Input type="textarea" name="style" id="descIn" placeholder="An introduction to your band" 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="lineupIn">Line-up</Label>
                            <Input type="number" name="lineUp" id="lineupIn" placeholder="how many band memebers" 
                                onChange={(e) => setLineup(e.target.value)}
                            />
                        </FormGroup>

                        
                    </Col>
                    <Col md={6}>
                        <FormGroup style={{marginLeft: 20}}> 
                            <Label>
                                <Input type="checkbox" name="sound" checked={sound}
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
                            <Input type="text" name="style" id="countryIn" placeholder="USA" 
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="cityIn" >City</Label>
                            <Input type="text" name="style" id="cityIn" placeholder="San Fransisco" 
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="zipcodeIn">Zip-code</Label>
                            <Input type="number" name="zipCode" id="zipcodeIn" placeholder="95376.." 
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                    <Button 
                        id="namdFormSubmit-btn"
                        className="form-submit-btn"
                        onClick={() => handleClick()}
                    >
                        Submit
                    </Button>    
            </Form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistForm);

        // {name, style, lineup, zipcode, sound}
   