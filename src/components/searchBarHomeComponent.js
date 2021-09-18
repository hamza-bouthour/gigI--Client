import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBands, deleteBand, fetchQueryBands } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchBands,
    deleteBand,
    fetchQueryBands
}
const mapStateToProps = (bands, user) => {
    return {
        bands,
        user
    }
}

const SearchBar = props => {
    const history = useHistory();
    const [query, setQuery] = useState(null);


    const searchClick = async (e) => {
        e.preventDefault();
        const data = {
            query: query
        }
       await props.fetchQueryBands(data)
        if(props.bands.bands.searchBands.length > 0) {
            history.push('/bands')
        }
        else {
            alert('No bands found')
        }
     
    }


    return (
        <form className="row">
            <input type="text" name="name" id="home-search-input" className="col-6 offset-2" placeholder="Rock, Birthday, Jazz band..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="col-2">
                <input type="submit"  id="home-search-btn" 
                    onClick={(e) => searchClick(e)}
                />
            </div>
    </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);