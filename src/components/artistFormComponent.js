import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import urls from '../config';
import { connect } from 'react-redux';
import { addNewBand, addNewUser } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import { Link } from 'react-router-dom';
import Header from './headerComponent';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
    const [bandMembers, setBandMembers] = useState([0]);
    const [displayForm, setFormDisplay] = useState('part1');
    const [file, uploadFile] = useState(null);
    const id = 2;

    function handleClick() {
        const data ={
           file,
           id
           
        }
        console.log(data)
    }

    const formLineUp = (props) => {
        return (
            <>
                
            </>
        )
    }
    const formUploadPhoto = () => {

    }

    const addMember = (number) => {
        let i = 0;
        let arr = []
        while (number > i) {
                i++;
                arr.push(i);   
        }
        return arr
    }

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
                    }, 2000)
                    
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
            // image
        }
        fetchNewBand(data);
        console.log(data);
  
    
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
        <>
            <Header />
            <div className="container artist-form-container">
                <div style={{display: props.displayBandForm}} className="band-form">
                    <Form encType="multipart/form-data" method="post">
                        <Row form style={{display: displayForm === 'part1' ? "flex" : "none"}}>
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
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                <Label htmlFor="nameIn">Name</Label>
                                <Input type="text" name="name" id="nameIn" placeholder="at least 5 caracters" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
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
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                <Label htmlFor="descIn" >Description</Label>
                                <Input type="textarea" name="style" id="descIn" placeholder="An introduction to your band" 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>
                            <Row>
                                <button 
                                     className="btn btn-info offset-10"
                                     style={{display: displayForm === 'part1' ? "block" : "none"}}
                                     onClick={() => setFormDisplay('part2')}  
                                >
                                    Next
                                </button>
                            </Row>

                            <Row style={{display: displayForm === "part2" ? "block" : "none"}}>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor="lineupIn">Line-up</Label>
                                        <Input type="number" name="lineUp" id="lineupIn" placeholder="how many band memebers" 
                                            onChange={(e) =>{ props.setLineup(e.target.value); setBandMembers(addMember(e.target.value)); console.log(addMember(e.target.value))  }}
                                        />
                                    </FormGroup>             
                                </Col>
                                <Col md={6}>
                                    <FormGroup style={{marginLeft: 20}}> 
                                        <Label></Label>
                                            <Input type="checkbox" name="sound" checked={sound}
                                                onChange={(e) => props.setSound(e.target.checked)}
                                            />          
                                    </FormGroup>             
                                </Col>
                                <Col>
                                    {bandMembers.map(b => {
                                    return (
                                            <Row form>
                                                <Col md={6} key={b}>
                                                    <FormGroup>
                                                        <Input type="text" name="city" id="exampleCity" placeholder="Name"/>
                                                    </FormGroup>
                                                </Col>
                                                    <Col md={4}>
                                                    <FormGroup>
                                                        <Input type="text" name="state" id="exampleState" placeholder="Instrument"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        )
                                    })}
                                </Col>
                            </Row>
                            <Row>
                                <ArrowBackIosIcon 
                                    className="col-1 offset-8 btn-form-navigation"
                                    style={{display: displayForm === 'part2' ? "block" : "none"}}
                                    onClick={() => setFormDisplay('part1')} 
                                />
                                <ArrowForwardIosIcon 
                                    className="col-1 btn-form-navigation"
                                    style={{display: displayForm === 'part2' ? "block" : "none"}}
                                    onClick={() => setFormDisplay('part3')}  
                                />
                            </Row>

                        <Row style={{display: displayForm === "part3" ? "flex" : "none"}}>
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
                            <Col md={2}>
                                <FormGroup>
                                    <Label htmlFor="zipcodeIn">Zip-code</Label>
                                    <Input type="number" name="zipCode" id="zipcodeIn" placeholder="95376.." 
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <ArrowBackIosIcon 
                                    className="col-1 offset-8 btn-form-navigation"
                                    style={{display: displayForm === 'part3' ? "block" : "none"}}
                                    onClick={() => setFormDisplay('part2')} 
                                />
                            <ArrowForwardIosIcon 
                                    className="col-1 btn-form-navigation"
                                    style={{display: displayForm === 'part3' ? "block" : "none"}}
                                    onClick={() => setFormDisplay('part4')}  
                                />
                        </Row>

                        <div style={{display: displayForm === 'part4' ? "flex" : "none"}}>
                            {/* <form enctype="multipart/form-data" action="http://192.168.1.82:3001/upload" method="post">
                                <div>
                                    <input type="file" name="image" 
                                        onChange={(e) => uploadFile(e.target.files[0])}
                                    />
                                    <input value={1} type="hidden" name="inputId" readOnly/>
                                </div>
                            </form> */}
                            <Input type="file" name="image" className="col-6"
                                onChange={(e) => uploadFile(e.target.files[0])}
                            >
                                    
                            </Input>
                            <ArrowBackIosIcon 
                                    className="col-1  btn-form-navigation"
                                    onClick={() => setFormDisplay('part3')} 
                                />
                            <Button 
                                id="namdFormSubmit-btn"
                                className="form-submit-btn"
                                onClick={() => handleClick()}
                                value="upload"
                            >
                                Submit
                            </Button>    
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistForm);

        // {name, style, lineup, zipcode, sound}
   