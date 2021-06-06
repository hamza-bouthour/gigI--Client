import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

const RecruiterForm = props => {
    const [recFirstName, setFirstName] = useState('');
    const [rectLastName, setLastName] = useState('');
    const [recEmail, setEmail] = useState('');
    const [recPassword, setPassword] = useState('');
    const [recZipCode, setZipcode] = useState('');
    const [recEvent, setEvent] = useState('');
    
    function handleClick () {
        const data = [
            recFirstName,
            rectLastName,
            recEmail,
            recPassword,
            recZipCode,
            recEvent
        ]
        console.log(data)
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

export default(RecruiterForm);