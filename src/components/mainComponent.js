import React from 'react';
import Header from './headerComponent';
import Home from './homeComponent';
import BandList from './bandListComponent';
import Login from './loginComponent';
import Profile from './artistProfileComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import ArtistForm from './artistFormComponent';
import RecruiterForm from './guestFromComponent';
import Test from './testComponent';

const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}
const Main = (props) => {
    const BandInfo = ({match}) => {
        return (
            <div>
                <Test band={props.bands.bands.bands.filter(band => band.bandId === +match.params.bandId)[0]}/>
            </div>
        )
    }
     
    return (
        <div>   
           <Header />
           <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/bands' component={BandList} />
                <Route path='/bands/:bandId' component={BandInfo} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path="/artists" component={ArtistForm} />
                <Route exact path="/guests" component={RecruiterForm} />
                <Route exact path="/login">
                    {props.bands.user.loggedIn ? <Redirect to="/home" /> : <Login />}
                </Route>
                <Redirect to='/home'/> 
           </Switch>
        </div>
    )
}


export default connect(mapStateToProps)(Main);