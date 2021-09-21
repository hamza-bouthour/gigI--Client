import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Row } from 'reactstrap';
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

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: 'asd',
            password: 'asdf'
        }
    }
  
    handleClick(e) {
        e.preventDefault();
          const data ={
              type: 'typed',
              email: this.state.email,
              password: this.state.password  
          }
          this.props.loginUser(data)
        console.log(this.state.email, this.state.password)
      }
   

    componentDidMount() {
        if (localStorage.getItem('email')) {
            let localEmail = localStorage.getItem('email');
            let localPassword = localStorage.getItem('password');
            const data = {
                type: 'local',
                email: localEmail,
                password: localPassword
            }
            this.props.loginUser(data)
        }
    }
    

    render() {

        if(!this.props.bands.user.loggedIn) {
                    return (
                        <div className=" login-form-container">
                            <Row className="">
                                <Form  className="m-auto form-login">
                                    <FormGroup className="mb-2 login-form">
                                        <Input type="email" name="email" id="exampleEmail" placeholder="email" 
                                            onChange={(e) => this.setState({email: e.target.value})}
                                        />
                                    </FormGroup>
                                    <FormGroup className="">
                                        <Input type="password" name="password" id="examplePassword" placeholder="password" autoComplete="on"
                                            onChange={(e) => this.setState({password: e.target.value})}
                                        />
                                    </FormGroup>
                                    <Button color="info" 
                                        onClick={(e) =>  this.handleClick(e)}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);