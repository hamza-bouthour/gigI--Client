import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../redux/ActionCreators';
import { Redirect } from 'react-router-dom';


const mapDispatchToProps = {
    loginUser
}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}

const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [saveCre, setCred] = useState(false);
   
    useEffect(() => {
        console.log(props.bands.user.loggedIn, 'LOOOOOK EGERE')
    })

    async  function handleClick(e) {
      e.preventDefault();
        const data ={
           email,
           password
           
        }
        props.loginUser(data)
    }

    if(!props.bands.user.loggedIn) {
        return (
            <div className=" login-form-container">
                <Row className="">
                    <Form  className="m-auto form-login">
                        <FormGroup className="mb-2 login-form">
                            <Input type="email" name="email" id="exampleEmail" placeholder="email" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="">
                            <Input type="password" name="password" id="examplePassword" placeholder="password" 
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
                            onClick={(e) =>  handleClick(e)}
                        >Submit</Button>
                        <Button color="secondary" className="ml-1">cancel</Button>
                    </Form>
                </Row>
            </div>
        )
    } else {
        return (
            <Redirect to='/home' />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);