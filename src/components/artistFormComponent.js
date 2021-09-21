import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import urls from '../config';
import { connect } from 'react-redux';
import { addNewID, addNewUser } from '../redux/ActionCreators';
import { Link } from 'react-router-dom';



const mapDispatchToProps = {
    addNewID,
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
    const [displayBtn, setDisplayBtn] = useState(false);
    

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
            .then(response => {setBandId(response.data[0].bandId); props.addNewID(response.data[0].bandId)})
            .catch((error) => {
            console.error('Error:', error);
        });
    }

   function handleClickForm1(e) {
       e.preventDefault();
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
        fetchNewBand(data);  
}
async function handleClickform2(e) {
    e.preventDefault();
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
    return (
        <>
        <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" alt="cover-header"/>
        <div className="p-3">
            <div className="container my-5 artist-form-container">
                <div style={{display: props.displayBandForm}} className="band-form">
                    <Form>
                        <Row form style={{display: displayForm === 'part1' ? "flex" : "none"}}>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="form-label" htmlFor="emailIn">Email</Label>
                                    <Input className="form-input" type="text" name="email" id="emailIn" placeholder="band@gigit.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>

                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="form-label" htmlFor="pswIn">Password</Label>
                                    <Input className="form-input" type="text" name="pswIn" id="pswIn" placeholder="at least 5 caracters" 
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                <Label className="form-label" htmlFor="nameIn">Name</Label>
                                <Input className="form-input" type="text" name="name" id="nameIn" placeholder="at least 5 caracters" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                    <Label className="form-label" htmlFor="eventRecruiterIn">Type of music</Label>
                                    <Input className="form-input" type="select" name="event" id="eventRecruiterIn" 
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
                                    <Label className="form-label" htmlFor="eventIn">Event type</Label>
                                    <Input className="form-input" type="text" name="event" id="eventIn" placeholder="Lounges, birthdays..." 
                                        onChange={(e) => setEventype(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                    <Label className="form-label" htmlFor="costIn">Cost</Label>
                                    <Input className="form-input" type="number" name="cost" id="costIn" placeholder="$" 
                                        onChange={(e) => setCost(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup style={{display: displayForm === 'part1' ? "block" : "none"}}>
                                    <Label className="form-label" htmlFor="descIn" >Description</Label>
                                    <Input className="form-input" type="textarea" name="style" id="descIn" placeholder="An introduction to your band" 
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </FormGroup>
                            <Row>
                                <button 
                                    type="button"
                                    className="col-2 offset-10 btn-form-navigation btn-next"
                                    style={{display: displayForm === 'part1' ? "block" : "none"}}
                                    onClick={() => setFormDisplay('part2')}  
                                >Next</button>
                                
                            </Row>
                            <Row style={{display: displayForm === "part2" ? "flex" : "none"}}>
                            <Col md={4}>
                                <FormGroup>
                                    <Label className="form-label" htmlFor="countryIn" >Country</Label>
                                    <Input className="form-input" type="text" name="style" id="countryIn" placeholder="USA" 
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label className="form-label" htmlFor="cityIn" >City</Label>
                                    <Input className="form-input" type="text" name="style" id="cityIn" placeholder="San Fransisco" 
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="form-label" htmlFor="zipcodeIn">Zip-code</Label>
                                    <Input className="form-input" type="number" name="zipCode" id="zipcodeIn" placeholder="95376.." 
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>     
                                <button 
                                    className="col-2 offset-7 btn-form-navigation mr-2 btn-back"
                                    style={{display: displayForm === 'part2' ? "block" : "none"}}
                                    onClick={() => setFormDisplay('part1')} 
                                >Back</button>
                                <button
                                    className="col-2  btn-form-navigation btn-next"
                                    style={{display: displayForm === 'part2' ? "block" : "none"}}
                                    onClick={(e) => { handleClickForm1(e); setFormDisplay('part3');}}
                                >Next</button>
                            </Row>
                        <Row style={{display: displayForm === "part3" ? "block" : "none"}}>
                            <Col md={8}>
                                <FormGroup>
                                    <Label className="form-label" htmlFor="lineupIn">Line-up</Label>
                                    <Input className="form-input" type="number" name="lineUp" id="lineupIn" placeholder="how many band memebers" 
                                        onChange={(e) =>{ setLineup(e.target.value); setBandMembers(addMember(e.target.value)); console.log(addMember(e.target.value))  }}
                                    />
                                </FormGroup>             
                            </Col>
                            {/* <Col md={6}>
                                <FormGroup style={{marginLeft: 20}}> 
                                    <Label></Label>
                                        <Input className="form-input" type="checkbox" name="sound" checked={sound}
                                            onChange={(e) => setSound(e.target.checked)}
                                        />          
                                </FormGroup>             
                            </Col> */}
                            <Col col={6}>
                                <div className="container">
                                    {bandMembers.map(b => {
                                    return (
                                        <Row key={b}>
                                            <FormGroup className="col-7"> 
                                                <Input className="form-input" type="text" name="city" id="exampleCity" placeholder="Name"
                                                    onBlur={(e) => setMembersName(prevState => [...membersName, e.target.value]) }    
                                                />
                                            </FormGroup>
                                        
                                            
                                            <FormGroup className="col-5">
                                                <Input className="form-input" type="text" name="state" id="exampleState" placeholder="Instrument"
                                                    onBlur={(e) => setMembersInstruments(prevState => [...membersInstrument, e.target.value])  }
                                                />
                                            </FormGroup>    
                                        </Row>
                                        )
                                    })}
                                </div>
                            </Col>
                            <Col className="row">
                                <button
                                    style={{display: !displayBtn ? "none" : "block"}}
                                    className="col-2 offset-5 btn-form-navigation mr-2 btn-back"
                                    style={{display: displayForm === 'part3' ? "block" : "none"}}
                                    onClick={(e) => {e.preventDefault() ;setFormDisplay('part2')}} 
                                >BacK</button> 
                                <button
                                    
                                    className="col-2  btn-form-navigation btn-next"
                                    style={{display: displayBtn === false ? "block" : "none"}}
                                    onClick={(e) => {handleClickform2(e);  setDisplayBtn(true)}}  
                                >
                                    Confirm
                                </button>      
                                    <Link to="/upload" className="col-2  btn-form-navigation btn-next ml-2" disabled style={{display: displayBtn === false ? "none" : "block"}}
                                    >Upload photo</Link>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    </>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistForm);

        // {name, style, lineup, zipcode, sound}
   