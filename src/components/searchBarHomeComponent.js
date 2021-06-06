import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const SearchBar = props => {

    return (
        <form className="row">
        <input type="text" name="name" id="home-search-input" className="col-10 col-md-6 offset-md-3" placeholder="Rock, Birthday, Jazz band..."/>
        <input type="submit"  id="home-search-btn" className="col-1">
            
        </input>
    </form>
    )
}



export default SearchBar;