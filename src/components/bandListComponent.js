import React, { Component } from 'react';
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

class BandList extends Component {
    constructor(props) {
        super();
        this.state = {
            bands: []
          
        }

        
    }

    componentDidMount() {
        console.log('sad')
        if (!this.props.bands.bands.isSearching) {
            this.props.bandsLoading()
                 fetch(urls.bandsUrl, {
                method: 'GET', 
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })
                .then(response => response.json())
                .then(response => {this.props.addBands(response.data); this.setState({bands: response.data})})
                .catch((error) => {
                    new Error(error.message)
            });
             
        }
         else {
             this.setState({bands: this.props.bands.bands.searchBands})
            } 

    }

    render() {
        if (this.props.bands.bands.isLoading) {
            return (
                <Loading />
            )
        }
        if  (this.props.bands.bands.errMess) {
            return (
                <h3>{this.props.bands.bands.errMess}</h3>
            )
        }
        return ( 
            <div>
                <img className="col-12 m-0 photo-header" src="https://i.postimg.cc/026tQ8XS/bands-Component-Header.jpg" alt="cover-header"/>
                <div className="container">
                    <BandsNavigation />
                    <SearchBar />
                    <DisplayResultbox result={this.props.bands.bands.isSearching ? this.props.bands.bands.searchBands : ''} isSearching={this.props.bands.bands.isSearching}/>
                        {this.state.bands.map((band, i) => {
                            return (
                                <BandBox key={i} band={band}/>
                            )
                        })}
                </div>
            </div>
            
        )
    }
}
// function BandList(props) {

//     // const [bands, getData] = useState([]);
    
//     // useEffect(() => {
     
//     // }, [])


 
// }
export default connect(mapStateToProps, mapDispatchToProps)(BandList);



