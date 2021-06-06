import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import bandsUrl from '../config';

const dataExample =   {
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
function enableForm () {
    formControl === 'disabled' ? setControl(false) : setControl(true);
}
    return (
        <div style={{display: props.displayBandForm}} className="container mt-5 p-5">

            <Form>
                <fieldset disabled={formControl}>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label htmlFor="emailIn">Email</Label>
                            <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="email" id="emailIn" placeholder={dataExample.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>

                    </Col>
                </Row>
                    <FormGroup>
                        <Label htmlFor="nameIn">Name</Label>
                        <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="name" id="nameIn"placeholder={dataExample.name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                            <Label htmlFor="eventRecruiterIn">Type of music</Label>
                            <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="select" name="event" id="eventRecruiterIn" 
                                onChange={(e) => setStyle(e.target.value)}
                            >
                            <option value={dataExample.style}>{dataExample.style}</option>
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
                        <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="textarea" name="style" id="descIn" placeholder={dataExample.description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="lineupIn">Line-up</Label>
                            <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="number" name="lineUp" id="lineupIn" placeholder={dataExample.lineup} 
                                onChange={(e) => setLineup(e.target.value)}
                            />
                        </FormGroup>

                        
                    </Col>
                    <Col md={6}>
                        <FormGroup style={{marginLeft: 20}}> 
                            <Label>
                                <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="checkbox" name="sound" checked={dataExample.sound}
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
                            <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="style" id="countryIn" placeholder={dataExample.country} 
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="cityIn" >City</Label>
                            <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="text" name="style" id="cityIn" placeholder={dataExample.city} 
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="zipcodeIn">Zip-code</Label>
                            <Input style={{backgroundColor: formControl === 'disabled' ? 'rgb(28, 71, 71)' : 'white'}} type="number" name="zipCode" id="zipcodeIn" placeholder={dataExample.zipcode} 
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            
                    </fieldset>
            </Form>
            <Button 
                        id="namdFormSubmit-btn"
                        className="form-submit-btn"
                        onClick={() => setControl(false)}
                    >
                        Edit
                    </Button>
                    <Button 
                        id="namdFormSubmit-btn"
                        className="form-submit-btn"
                        onClick={() => setControl(true)}
                    >
                        Home
                    </Button>
        </div>
    )
}

export default Profile;

        // {name, style, lineup, zipcode, sound}
   