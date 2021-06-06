import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';


const Login = props => {

    return (
        <div className="container mt-5">
            <Row className="p-5">
                <p className="col-10 offset-1 col-md-6 offset-md-2 mr-md-5 pl-5 mb-2">Login using your Facebook or Google account.</p>
                <Button id="login-fb-btn" className="col-10 col-md-6 offset-md-3 offset-1 mb-2"><img style={{width: "23px", margin: "auto"}} src="https://i.postimg.cc/CxpWQKrW/317746-20.png"/>acebook</Button>
                <Button id="login-gl-btn" className="col-10 col-md-6 offset-md-3 offset-1"><img src="https://i.postimg.cc/cCmnGCMX/2993685-20.png"/>oogle</Button>
            </Row>
            <Row className="px-5">
                <p className="col-10 offset-1 col-md-6 offset-md-2 mr-md-5 pl-5 mb-2">Login with your credentials.</p>
                <Form  className="col-10 col-md-6 offset-md-3 offset-2">
                    <FormGroup className="mb-2 ">
                        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                    </FormGroup>
                    <FormGroup className="">
                        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                    </FormGroup>
                    <FormGroup style={{marginLeft: 20}}>
                        <Label>
                            <Input type="checkbox" name="sound" 
                            // checked={sound}
                                // onChange={(e) => setSound(e.target.checked)}
                                
                            />
                            Reliable sound system
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Row>
        </div>
    )
}

export default Login;