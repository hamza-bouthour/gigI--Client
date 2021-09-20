import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteBand, bandsLoading, addBands } from '../redux/ActionCreators';
import Loading from './LoadingComponent';
import BandBox from './bandComponent';
import BandsNavigation from './bandsNavigation';
import SearchBar from './searchBarHomeComponent';
import urls from '../config';

const mapDispatchToProps = {
    deleteBand,
    bandsLoading,
    addBands
}
const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}

function DisplayResultbox(props) {
    const {result} = props;
    const {isSearching} = props;
    const length = result.length;
    console.log(result, 'result')
    console.log(length, 'length')
    console.log(isSearching, 'isSearching')

    if (result && length > 0) {
        return (
            <div className="row">
                <div className="col-4 offset-4 search-alert">
                    {length > 1 ? `${length} results founds.` : `${length} result found`}
                </div>
            </div>
        )
    } 
    if (result && length < 1 && isSearching) {
        return(<div className="col-4 offset-4 search-alert">No results</div>)
    } else return(<div></div>)
    
}
function BandList(props) {

    const [bands, getData] = useState([]);
    
    useEffect(() => {
        if (!props.bands.bands.isSearching) {
            props.bandsLoading()
                 fetch(urls.bandsUrl, {
                method: 'GET', 
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })
                .then(response => response.json())
                .then(response => {props.addBands(response.data); getData(response.data)})
                .catch((error) => {
                    new Error(error.message)
            });
             
        }
         else {
             getData(props.bands.bands.searchBands)
            }  
    },[props.bands.bands.searchBands])


    if (props.bands.bands.isLoading) {
        return (
            <Loading />
        )
    }
    if  (props.bands.bands.errMess) {
        return (
            <h3>{props.bands.bands.errMess}</h3>
        )
    }
    return ( 
        <div>
            <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" alt="cover-header"/>
            <div className="container">
                <BandsNavigation />
                <SearchBar />
                <DisplayResultbox result={props.bands.bands.isSearching ? props.bands.bands.searchBands : ''} isSearching={props.bands.bands.isSearching}/>
                    {bands.map((band, i) => {
                        return (
                            <BandBox key={i} band={band}/>
                        )
                    })}
            </div>
        </div>
        
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(BandList);



