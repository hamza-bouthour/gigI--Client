import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import urls from '../config';
import { connect } from 'react-redux';
import { addNewBand, addNewUser } from '../redux/ActionCreators';
import { Link } from 'react-router-dom';
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
    const [bandMembers, setBandMembers] = useState([0]);
    const [displayForm, setFormDisplay] = useState('part1');
    const [cost, setCost] = useState(0);
    const [eventype, setEventype] = useState('');
    const [membersInstrument, setMembersInstruments] = useState([]);
    const [membersName, setMembersName] = useState([]);
    const [bandId, setBandId] = useState('');
    

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
        fetch(urls.bandsUrl, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(response => setBandId(response.data[0].bandId))
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    const addMembersToBand = (member, bandId) => {

        fetch(urls.bandsUrl, {
            method: 'POST', 
            body: JSON.stringify(member),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(response => setBandId(response.data[0].bandId))
            .catch((error) => {
            console.error('Error:', error);
        });
    }
   function handleClickForm1() {
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
            image: '',
            cost,
            eventype
        }
        console.log(data)
        fetchNewBand(data)  
}
async function handleClickform2() {
    let membersList = [];
    for (let i = 0; i < membersName.length; i++) {
        let obj = {}
        obj['name'] = membersName[i];
        obj['instrument'] = membersInstrument[i];
        membersList.push(obj)
    }

    let data = {
        list: membersList,
        id: bandId
    }
    fetch(urls.bandMemberUrl, {
        method: 'POST', 
        body: JSON.stringify(data),
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

function handleClickform3() {
    fetch('http://192.168.1.82:3001/upload', {
        method: 'POST', 
        body: JSON.stringify({id: bandId}),
        headers: {
            "Content-type": "multipart/form-data; boundary=<calculated when request is sent>",       
        }
    })
        .then(response => response.json())
        .catch((error) => {
        console.error('Error:', error);
    });
}

    return (
        <>
        <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" alt="cover-header"/>
        <div className="container my-5 artist-form-container">
            <div style={{display: props.displayBandForm}} className="band-form">
                <Form>
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
                                <Label htmlFor="eventIn">Event type</Label>
                                <Input type="text" name="event" id="eventIn" placeholder="Lounges, birthdays..." 
                                    onChange={(e) => setEventype(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                <Label htmlFor="costIn">Cost</Label>
                                <Input type="number" name="cost" id="costIn" placeholder="$" 
                                    onChange={(e) => setCost(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                <Label htmlFor="descIn" >Description</Label>
                                <Input type="textarea" name="style" id="descIn" placeholder="An introduction to your band" 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>
                        <Row>
                            <button 
                                type="button"
                                 className="btn btn-info offset-10"
                                 style={{display: displayForm === 'part1' ? "block" : "none"}}
                                 onClick={() => setFormDisplay('part2')}  
                            >
                                Next
                            </button>
                        </Row>
                        <Row style={{display: displayForm === "part2" ? "flex" : "none"}}>
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
                                style={{display: displayForm === 'part2' ? "block" : "none"}}
                                onClick={() => setFormDisplay('part1')} 
                            />
                            <ArrowForwardIosIcon 
                                className="col-1 btn-form-navigation"
                                style={{display: displayForm === 'part2' ? "block" : "none"}}
                                onClick={() => { handleClickForm1(); setFormDisplay('part3') }}
                            />
                        </Row>
                    <Row style={{display: displayForm === "part3" ? "flex" : "none"}}>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="lineupIn">Line-up</Label>
                                <Input type="number" name="lineUp" id="lineupIn" placeholder="how many band memebers" 
                                    onChange={(e) =>{ setLineup(e.target.value); setBandMembers(addMember(e.target.value)); console.log(addMember(e.target.value))  }}
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
                                                <input type="text" name="city" id="exampleCity" placeholder="Name"
                                                    onBlur={(e) => setMembersName(prevState => [...membersName, e.target.value]) }    
                                                />
                                            </FormGroup>
                                        </Col>
                                            <Col md={4}>
                                            <FormGroup>
                                                <input type="text" name="state" id="exampleState" placeholder="Instrument"
                                                    onBlur={(e) => setMembersInstruments(prevState => [...membersInstrument, e.target.value])  }
                                                />
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
                                style={{display: displayForm === 'part3' ? "block" : "none"}}
                                onClick={() => setFormDisplay('part2')} 
                            />
                        <ArrowForwardIosIcon 
                                className="col-1 btn-form-navigation"
                                style={{display: displayForm === 'part3' ? "block" : "none"}}
                                onClick={() => {handleClickform2(); setFormDisplay('part4') }}  
                            />
                    </Row>
                    <div style={{display: displayForm === 'part4' ? "flex" : "none", justifyContent: 'center'}}>
                        <form enctype="multipart/form-data"action="http://192.168.1.82:3001/upload" method="post">
                                <div  className="form-group">
                                    <input type="file" name="image" 
                                    />
                                    <input value={bandId} type="hidden" name="inputId" readOnly/>
                                    <Link to='/home'>
                                        <input type="submit" className="form-submit-btn px-3 py-1"
                                            // onClick={() => handleClick()}
                                        />
                                
                                    </Link>
                                </div>
                        </form>
                    </div>
                </Form>
            </div>
        </div>
    </>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistForm);

        // {name, style, lineup, zipcode, sound}
   