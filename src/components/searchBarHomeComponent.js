import React, { useState } from 'react';
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

    const searchClick = async (e) => {
        e.preventDefault();
        const data = {
            query: query
        }
        await props.fetchQueryBands(data)
    }

    return (
        <div>
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
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);