import React, { useState } from 'react';
import ArtistFrom from './artistFormComponent';
import RecruiterForm from './guestFromComponent';
import CommentHome from './commentHomeComponent';
import SearchBar from './searchBarHomeComponent'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';


const dataExample =[
    {
        name: "Emily Forestier",
        info: "suck dicks all day",
        comment: "This is a random comment, it has to be 3 lignes on 69 px width. Im not doing it the right way."
    },
    {
        name: "Maria Guadarraama",
        info: "Loves me all day",
        comment: "This is a random comment, it has to be 3 lignes on 69 px width. Im not doing it the right way."
    }
]

const Home = props => {
    const [bandFormDisplay, setBandFormDisplay] = useState('none');
    const [recruiterFromDisplay, setRecFormDisplay] = useState('none');
    return (
        <div style={{padding: 5}}>
            <div className="jumbotron jumbotron-header mx-auto mt-5 mt-md-2">
                <h3>Welcome to Gig In Town</h3>
                <h6 style={{marginLeft: 80}}>Git In Town is a platform made for artists to connect with people seeking to celebrate an event or simply enjoy some good time music.</h6>    
            </div>
            <div className="container">  
                <SearchBar />
            </div>
            <div className="form-container">
                <ArtistFrom displayBandForm={bandFormDisplay}/>
                <RecruiterForm displayRecruiterForm={recruiterFromDisplay} />
            </div>
            <div className="container-fluid">
                    <Row className="my-5">
                        <Col md={3} className="home-comment-container">
                         {dataExample.map(ex => {
                             return (
                                 <CommentHome userComment={ex}/>
                             )
                         })}
                        </Col>
                        <Col md={6}  className="home-band-box">
                            <h2 className="mb-3">Lounge Music</h2>
                            <img  style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/g0fg9wkv/Home-Band1.jpg"/>
                            <p>bla bla bla blablabalksdfnljasnhdvpoiuv saojnaso vnoiusv</p>
                        </Col>
                        <Col md={3} sm={12} className="home-buttons-container">
                            <button className="button-form-center"
                                onClick={() => {
                                    // bandFormDisplay === 'none' ? setBandFormDisplay('block') : setBandFormDisplay('none')
                                    if (bandFormDisplay === 'none' && recruiterFromDisplay === 'block') {
                                        setBandFormDisplay('black');
                                        setRecFormDisplay('none');
                                    }
                                    if (bandFormDisplay === 'none') {
                                        setBandFormDisplay('block');
                                    }
                                    else
                                    setBandFormDisplay('none');

                                    
                                }}
                                >
                                New artist?
                            </button>
                                <button className=" button-form-center"
                                onClick={() => {
                                    // recruiterFromDisplay === 'none' && (bandFormDisplay === 'block' || 'none') ?  setRecFormDisplay('block') : setRecFormDisplay('none');
                                    if (recruiterFromDisplay === 'none' && bandFormDisplay === 'block') {
                                        setBandFormDisplay('none');
                                        setRecFormDisplay('block');
                                    }
                                    if (recruiterFromDisplay === 'none') {
                                        setRecFormDisplay('block');
                                    }
                                    else
                                    setRecFormDisplay('none');
                                        }}
                                    >
                                    
                                First time hiring?
                            </button>

                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col md={3} className="home-comment-container">
                            {dataExample.map(ex => {
                                return (
                                    <CommentHome userComment={ex}/>
                                )
                            })}
                        </Col>
                        <Col md={6} className="home-band-box">
                            <h2>Family events</h2>
                            <img  style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/x8jHBYHv/home-Namd2.jpg"/>
                            <p>bla bla bla blablabalksdfnljasnhdvpoiuv saojnaso vnoiusv</p>
                        </Col>
                        <Col md={3} sm={12} className="home-buttons-container">
                            <button className="button-form-center"
                                onClick={() => {
                                    // bandFormDisplay === 'none' ? setBandFormDisplay('block') : setBandFormDisplay('none')
                                    if (bandFormDisplay === 'none' && recruiterFromDisplay === 'block') {
                                        setBandFormDisplay('black');
                                        setRecFormDisplay('none');
                                    }
                                    if (bandFormDisplay === 'none') {
                                        setBandFormDisplay('block');
                                    }
                                    else
                                    setBandFormDisplay('none');

                                    
                                }}
                                >
                                New artist?
                            </button>
                                <button className=" button-form-center"
                                onClick={() => {
                                    // recruiterFromDisplay === 'none' && (bandFormDisplay === 'block' || 'none') ?  setRecFormDisplay('block') : setRecFormDisplay('none');
                                    if (recruiterFromDisplay === 'none' && bandFormDisplay === 'block') {
                                        setBandFormDisplay('none');
                                        setRecFormDisplay('block');
                                    }
                                    if (recruiterFromDisplay === 'none') {
                                        setRecFormDisplay('block');
                                    }
                                    else
                                    setRecFormDisplay('none');
                                        }}
                                    >
                                    
                                First time hiring?
                            </button>

                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col md={3} className="home-comment-container">
                            {dataExample.map(ex => {
                                return (
                                    <CommentHome userComment={ex}/>
                                )
                            })}
                        </Col>
                        <Col md={6} className="home-band-box">
                            <h2>Best bands in town</h2>                           
                            <img style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/xC2LyL1F/band3.jpg"/>
                            <p>bla bla bla blablabalksdfnljasnhdvpoiuv saojnaso vnoiusv</p>
                        </Col>
                        <Col md={3} sm={12} className="home-buttons-container">
                            <button className="button-form-center"
                                onClick={() => {
                                    // bandFormDisplay === 'none' ? setBandFormDisplay('block') : setBandFormDisplay('none')
                                    if (bandFormDisplay === 'none' && recruiterFromDisplay === 'block') {
                                        setBandFormDisplay('black');
                                        setRecFormDisplay('none');
                                    }
                                    if (bandFormDisplay === 'none') {
                                        setBandFormDisplay('block');
                                    }
                                    else
                                    setBandFormDisplay('none');

                                    
                                }}
                                >
                                New artist?
                            </button>
                                <button className=" button-form-center"
                                onClick={() => {
                                    // recruiterFromDisplay === 'none' && (bandFormDisplay === 'block' || 'none') ?  setRecFormDisplay('block') : setRecFormDisplay('none');
                                    if (recruiterFromDisplay === 'none' && bandFormDisplay === 'block') {
                                        setBandFormDisplay('none');
                                        setRecFormDisplay('block');
                                    }
                                    if (recruiterFromDisplay === 'none') {
                                        setRecFormDisplay('block');
                                    }
                                    else
                                    setRecFormDisplay('none');
                                        }}
                                    >
                                    
                                First time hiring?
                            </button>

                        </Col>
                    </Row>

            </div>
        
        </div>
    )
}

export default Home;