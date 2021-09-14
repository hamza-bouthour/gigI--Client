import React, { useState, useEffect } from 'react';
import ArtistFrom from './artistFormComponent';
import RecruiterForm from './guestFromComponent';
import CommentHome from './commentHomeComponent';
import SearchBar from './searchBarHomeComponent';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { fetchBands } from '../redux/ActionCreators';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { styled } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const myMusicNoteIcon = styled(MusicNoteIcon)({
    color: 'white',
});

const mapDispatchToProps = {
    fetchBands,
    
}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}
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

    useEffect(() => {
        props.fetchBands();
    }, [])

    return (
        <div>
            <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/fb7Hc7Kj/clem-onojeghuo-fxt2d5-Dqifk-unsplash.jpg" />
            <div className="container-fluid wrapper-header p-0">
                <div className="row ">
                </div>
            </div>
         
            <div className="form-container">
                <ArtistFrom displayBandForm={bandFormDisplay}/>
                <RecruiterForm displayRecruiterForm={recruiterFromDisplay} />
            </div>
            <div className="container-fluid p-0">
                    <div className="row justify-content-center my-5">
                        <div className="mx-5 link-form" 
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
                            <MusicNoteIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>Hire talent</p>
                        </div>
                        <div className="mx-5 link-form"
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
                        }}>
                            <PlayCircleFilledIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>New Artist</p>
                        </div>
                        <Link className="mx-5 link-form">
                            <LinkedInIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>LinkedIn</p>
                        </Link>
                        <Link className="mx-5 link-form">
                            <GitHubIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>Repository</p>
                        </Link>
                        
                    </div>
                    <div className="">  
                        <SearchBar />
                    </div>
                   
                        <img className="col-12 photo-header" src="https://i.postimg.cc/dQn34njH/andreas-ronningen-S2-Yss-Lw97l4-unsplash-1-1.jpg" />
                  
                    <div className="container">
                        <Row className="my-5">
                            <Col md={8}  className="home-band-box">
                                <h5 className="mb-1">Lanty</h5>
                                <img  style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/K8hYYVGY/photos-by-lanty-O38-Id-cy-V4-M-unsplash.jpg"/>
                                <div className="band-box-bottom">
                                    <p>Photos by Lanty</p>
                                    <div className="band-box-links">
                                        <Link className="band-box-link">
                                            Check Lanty
                                        </Link>
                                        <Link className="band-box-link">
                                            Browse photographers
                                        </Link>
                                    </div>
                                </div>
                                <img  style={{borderRadius: "5px"}} className="artist-secondary-photo-top" src="https://i.postimg.cc/zBK8gvCc/shardayyy-photography-f-Jzm-Pe-a0e-U-unsplash.jpg"/>
                            </Col>
                            <Col md={4} className="home-comment-container">
                            {dataExample.map((ex, i) => {
                                return (
                                    <CommentHome key={i} userComment={ex}/>
                                )
                            })}
                            </Col>
                        
                        </Row>
                    </div>
                        <img className="col-12 photo-header" src="https://i.postimg.cc/LXzZvHkJ/livemusic-1-1.jpg"/>
                    <div className="container">
                        <Row className="my-5">
                            <Col md={8}  className="home-band-box">
                                <h5 className="mb-1">Land-free</h5>
                                <img  style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/1X0mLX4q/Home-Band1.jpg"/>
                                <div className="band-box-bottom">
                                    <p>Folk music</p>
                                    <div className="band-box-links">
                                        <Link className="band-box-link">
                                            Check Land-free
                                        </Link>
                                        <Link className="band-box-link">
                                            Browse bands
                                        </Link>
                                    </div>
                                </div>
                                <img  style={{borderRadius: "5px"}} className="artist-secondary-photo-top" src="https://i.postimg.cc/xTy8Zxb4/band3.jpg"/>
                            </Col>
                            <Col md={4} className="home-comment-container">
                            {dataExample.map((ex, i) => {
                                return (
                                    <CommentHome key={i} userComment={ex}/>
                                )
                            })}
                            </Col>
                        
                        </Row>
                    </div>
                    {/* <Row className="my-5">
                        <Col md={3} className="home-comment-container">
                            {dataExample.map((ex, i) => {
                                return (
                                    <CommentHome key={i} userComment={ex}/>
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
                            {dataExample.map((ex, i) => {
                                return (
                                    <CommentHome key={i} userComment={ex}/>
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
                    </Row> */}

            </div>
        
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);