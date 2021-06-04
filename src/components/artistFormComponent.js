import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import bandsUrl from '../config';

const ArtistForm = props => {
    const [btnColor, setBtnColor] = useState('#EE5407');
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

   function handleClick() {
        btnColor === 'red'? setBtnColor('blue') : setBtnColor('red')
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

    return (
        <div style={{display: props.display}} className="band-form">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="emailIn">Email</Label>
                            <Input type="text" name="email" id="emailIn" 
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
                        <Label htmlFor="styleIn" >Style</Label>
                        <Input type="text" name="style" id="styleIn" placeholder="Rock, blues, metal..." 
                            onChange={(e) => setStyle(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="descIn" >Description</Label>
                        <Input type="textarea" name="style" id="descIn" placeholder="Rock, blues, metal..." 
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
                            <Input type="text" name="style" id="countryIn" placeholder="Rock, blues, metal..." 
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="cityIn" >City</Label>
                            <Input type="text" name="style" id="cityIn" placeholder="Rock, blues, metal..." 
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
                        style={{backgroundColor: btnColor}}
                        onClick={() => handleClick()}
                    >
                        Submit
                    </Button>
            </Form>
        </div>
    )
}

export default ArtistForm;

        // {name, style, lineup, zipcode, sound}
   