import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { addNewGuest } from '../redux/ActionCreators';

const mapDispatchToProps = {
    addNewGuest
}
const mapStateToProps = (bands) =>{
    return {
        bands
    }
}

const RecruiterForm = props => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [event, setEvent] = useState('');
    
    function handleClick () {
        const data = [
            firstname,
            lastname,
            email,
            password,
            zipcode,
            event
        ]
        // console.log(data)
        // props.addNewGuest(data);
    }
    return (
        <div style={{display: props.displayRecruiterForm}} className="recruiter-form">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="firstNameRecruiterIn">First name</Label>
                            <Input type="text" name="firstname" id="firstNameRecruiterIn" 
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="lastNameRecruiterIn">Last name</Label>
                            <Input type="text" name="lastName" id="lastNameRecruiterIn" 
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="emailRecruiterIn">Email</Label>
                            <Input type="text" name="email" id="emailRecruiterIn" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="passwordRecruiterIn">Password</Label>
                            <Input type="text" name="password" id="passwordRecruiterIn" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="eventRecruiterIn">Password</Label>
                            <Input type="select" name="event" id="eventRecruiterIn" 
                                onChange={(e) => setEvent(e.target.value)}
                            >
                            <option style={{fontWeight: 'bold'}} value="birthday">Birthday</option>
                            <option style={{fontWeight: 'bold'}} value="Kids">Kids</option>
                            <option style={{fontWeight: 'bold'}} value="Live Music">Live Music</option>
                            <option style={{fontWeight: 'bold'}} value="Graduation">Graduation</option>
                            <option style={{fontWeight: 'bold'}} value="Wedding">Wedding</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label htmlFor="zipCodeRecruiterIn">Zip Code</Label>
                            <Input type="number" name="zipCode" id="zipCodeRecruiterIn" 
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    
                    </Row>
                
                <Button 
                        id="recFormSubmit-btn"
                        onClick={() => handleClick()}
                        className="form-submit-btn"
                    >
                        Submit
                    </Button>
            </Form>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterForm);