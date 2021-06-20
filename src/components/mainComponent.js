import React, { useState } from 'react';
import Header from './headerComponent';
import Home from './homeComponent';
import BandList from './bandListComponent';
import Login from './loginComponent';
import Profile from './artistProfileComponent';
import BandBox from './bandComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

// const mapDispatchToProps = {
//     fetchBands
// }
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}
const Main = (props) => {
    const BandInfo = ({band}) => {
        return (
            <BandBox band={props.bands.bands.bands.data.filter(band => band.band_id === band.band_id)[0]}/>
        )
    }
     
    return (
        <div>
           <Header />
           <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/bands' component={BandList} />
                <Route path='/bands/:bandId' component={BandInfo} />
                {/* <Route exact path='/login' component={Login} /> */}
                <Route exact path='/profile' component={Profile} />
                <Route exact path="/login">
                    {props.bands.user.loggedIn ? <Redirect to="/profile" /> : <Login />}
                </Route>
                <Redirect to='/home'/> 
           </Switch>
        </div>
    )
}


export default connect(mapStateToProps)(Main);