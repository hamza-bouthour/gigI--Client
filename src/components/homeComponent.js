import React, { useEffect } from 'react';
import CommentHome from './commentHomeComponent';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { fetchBands } from '../redux/ActionCreators';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Link, Redirect } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


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
        info: "description",
        comment: "This is a random comment, it has to be 3 lignes on 69 px width. Im not doing it the right way."
    },
    {
        name: "Maria Guadarraama",
        info: "Loves me all day",
        comment: "This is a random comment, it has to be 3 lignes on 69 px width. Im not doing it the right way."
    }
]

const Home = props => {

    useEffect(() => {
        props.fetchBands();
    }, [])
    if(props.bands.user.loggedIn) {
        return (
            <div>
                <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/Dzs18QNk/cover-Header.jpg" alt="cover-header"/>
                <div className="container-fluid wrapper-header p-0">
                    <div className="row ">
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="row justify-content-center my-5">
                        <Link className=" mx-5 link-form" to="/guests">
                            <MusicNoteIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>Hire talent</p>
                        </Link>
                        <Link className="mx-5 link-form" to="/artists">
                            <PlayCircleFilledIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>New Artist</p>
                        </Link>                 
                        <a className="mx-5 link-form" href="https://www.linkedin.com/in/hamza-bouthour/" target="_blank">
                            <LinkedInIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>LinkedIn</p>
                        </a>
                        <a className="mx-5 link-form" href="https://github.com/hamza-bouthour">
                            <GitHubIcon className="icon-link" style={{color: "#023E7D"}}/>
                            <p>Repository</p>
                        </a> 
                    </div>  
                    <img className="col-12 photo-header" src="https://i.postimg.cc/dQn34njH/andreas-ronningen-S2-Yss-Lw97l4-unsplash-1-1.jpg" alt="cover-header"/>   
                    <div className="container">
                        <Row className="my-5">
                            <Col md={8}  className="home-band-box">
                                <h5 className="mb-1">Lanty</h5>
                                <img  style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/K8hYYVGY/photos-by-lanty-O38-Id-cy-V4-M-unsplash.jpg" alt="cover-header"/>
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
                                <img  style={{borderRadius: "5px"}} className="artist-secondary-photo-top" src="https://i.postimg.cc/zBK8gvCc/shardayyy-photography-f-Jzm-Pe-a0e-U-unsplash.jpg" alt="cover-header"/>
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
                    <img className="col-12 photo-header" src="https://i.postimg.cc/LXzZvHkJ/livemusic-1-1.jpg" alt="cover-header"/>
                    <div className="container">
                        <Row className="my-5">
                            <Col md={8}  className="home-band-box">
                                <h5 className="mb-1">Land-free</h5>
                                <img  style={{borderRadius: "5px", marginBottom: "5px"}} src="https://i.postimg.cc/1X0mLX4q/Home-Band1.jpg" alt="cover-header"/>
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
                                <img  style={{borderRadius: "5px"}} className="artist-secondary-photo-top" src="https://i.postimg.cc/xTy8Zxb4/band3.jpg" alt="cover-header"/>
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
                </div>
            </div>
        )
    }
    else {
        return (
            <Redirect to='/login' />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);