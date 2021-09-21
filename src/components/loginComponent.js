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
            email: '',
            password: ''
        }

        
    }
  

   

    componentDidMount() {
        if (localStorage.getItem('email')) {
            let localEmail = localStorage.getItem('email');
            let localPassword = localStorage.getItem('password');
            console.log(localEmail, localPassword)
            const data = {
                type: 'local',
                email: localEmail,
                password: localPassword
            }
            this.props.loginUser(data)
        }
    }
    

    render() {

        function handleClick(e) {
            e.preventDefault();
              const data ={
                  type: 'typed',
                  email: this.state.email,
                  password: this.state.password  
              }
              this.props.loginUser(data)
          }

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
                                        <Input type="password" name="password" id="examplePassword" placeholder="password" 
                                            onChange={(e) => this.setState({password: e.target.value})}
                                        />
                                    </FormGroup>
                                    {/* <FormGroup style={{marginLeft: 20}}>
                                        <Label htmlFor="sound">
                                            <Input type="checkbox" name="sound" 
                                                checked={saveCre}
                                                onChange={(e) => setCred(e.target.checked)}  
                                            />
                                            Save my credentials
                                        </Label>
                                    </FormGroup> */}
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
}

// const Login = props => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [saveCre, setCred] = useState(false);
   
//     useEffect(() => {
//         if (localStorage.getItem('email')) {
//             let localEmail = localStorage.getItem('email');
//             let localPassword = localStorage.getItem('password');
//             const data = {
//                 type: 'local',
//                 email: localEmail,
//                 password: localPassword
//             }
//             props.loginUser(data)
//         }
//     }, [])

//     async  function handleClick(e) {
//       e.preventDefault();
//         const data ={
//             type: 'typed',
//             email,
//             password   
//         }
//         props.loginUser(data)
//     }

//     if(!props.bands.user.loggedIn) {
//         return (
//             <div className=" login-form-container">
//                 <Row className="">
//                     <Form  className="m-auto form-login">
//                         <FormGroup className="mb-2 login-form">
//                             <Input type="email" name="email" id="exampleEmail" placeholder="email" 
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </FormGroup>
//                         <FormGroup className="">
//                             <Input type="password" name="password" id="examplePassword" placeholder="password" 
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </FormGroup>
//                         <FormGroup style={{marginLeft: 20}}>
//                             <Label htmlFor="sound">
//                                 <Input type="checkbox" name="sound" 
//                                     checked={saveCre}
//                                     onChange={(e) => setCred(e.target.checked)}  
//                                 />
//                                 Save my credentials
//                             </Label>
//                         </FormGroup>
//                         <Button color="info" 
//                             onClick={(e) =>  handleClick(e)}
//                         >Submit</Button>
//                         <Button color="secondary" className="ml-1">cancel</Button>
//                     </Form>
//                 </Row>
//             </div>
//         )
//     } else {
//         return (
//             <Redirect to='/home' />
//         )
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Login);