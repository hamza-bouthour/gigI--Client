import React, { useState } from 'react';
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
    const [query, setQuery] = useState(null);

    function searchClick() {
        const data = {
            query: query
        }
        props.fetchQueryBands(data)
     
    }


    return (
        <form className="row">
            <input type="text" name="name" id="home-search-input" className="col-10 col-md-6 offset-md-3" placeholder="Rock, Birthday, Jazz band..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="col-2">
      
                <input type="submit"  id="home-search-btn" 
                    onClick={() => searchClick()}
                />
     
            </div>
    </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);