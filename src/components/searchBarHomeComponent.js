import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBands, deleteBand } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchBands,
    deleteBand
}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}

const SearchBar = props => {

    return (
        <form className="row">
            <input type="text" name="name" id="home-search-input" className="col-10 col-md-6 offset-md-3" placeholder="Rock, Birthday, Jazz band..."/>
            <div className="col-2">
            <Link to="/bands">
                <input type="submit"  id="home-search-btn" />
     
            </Link>
            </div>
    </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);