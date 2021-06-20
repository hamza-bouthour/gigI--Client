import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../redux/ActionCreators'

const mapDispatchToProps = {
    loginUser
}
const mapStateToProps = (user) =>{
    return {
        user
    }
}
const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [saveCre, setCred] = useState(false);
    const [file, uploadFile] = useState(null);

    function handleClick() {
        const data ={
            email,
            password,
           
        }
        console.log(data)
        props.loginUser(data);
    }
    function testUpload(data) {
            const formData = new FormData()
            formData.append('imageFile', data)
            console.log(formData)
            fetch('http://192.168.1.82:3001/upload', {
                method: 'POST', 
                body: formData,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((error) => {
            console.error('Error:', error);
        });
        
    }
    return (
        <div className="container mt-5">
             <Form>
                    <FormGroup>
                        <Input type="file" name="fileUploader" 
                            onChange={(e) => uploadFile(e.target.files[0])}
                        />
                        <Button type="button" onClick={() => { testUpload(file) }}>Submit</Button>
                    </FormGroup>
                </Form>
            <Row className="p-5">
                <p className="col-10 offset-1 col-md-6 offset-md-2 mr-md-5 pl-5 mb-2">Login using your Facebook or Google account.</p>
                <Button id="login-fb-btn" className="col-10 col-md-6 offset-md-3 offset-1 mb-2"><img style={{width: "23px", margin: "auto"}} src="https://i.postimg.cc/CxpWQKrW/317746-20.png"/>acebook</Button>
                <Button id="login-gl-btn" className="col-10 col-md-6 offset-md-3 offset-1"><img src="https://i.postimg.cc/cCmnGCMX/2993685-20.png"/>oogle</Button>
            </Row>
            <Row className="px-5">
                <p className="col-10 offset-1 col-md-6 offset-md-2 mr-md-5 pl-5 mb-2">Login with your credentials.</p>
                <Form  className="col-10 col-md-6 offset-md-3 offset-2">
                    <FormGroup className="mb-2 ">
                        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </FormGroup>
                    <FormGroup className="">
                        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup style={{marginLeft: 20}}>
                        <Label>
                            <Input type="checkbox" name="sound" 
                            checked={saveCre}
                                onChange={(e) => setCred(e.target.checked)}
                                
                            />
                            Save my credentials
                        </Label>
                    </FormGroup>
                    <Button color="info" 
                        onClick={() =>  handleClick()}
                    >Submit</Button>
                    <Button color="secondary" className="ml-5">cancel</Button>
                </Form>
            </Row>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);