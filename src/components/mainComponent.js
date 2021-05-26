import React, { useState } from 'react';
import Header from './headerComponent';
import Home from './homeComponent';
import BandList from './bandListComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';


const Main = (props) => {
     
    return (
        <div>
           <Header />
           <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/bands' component={BandList} />
                <Redirect to='/home'/> 
           </Switch>
        </div>
    )
}


export default Main;