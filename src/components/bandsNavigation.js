
import { Link } from 'react-router-dom';
import SearchBar from './searchBarHomeComponent';







const BandsNavigation = () => {
     return (
         <div className="bands-nav-container">
             <div className="container mb-5">
                <div className="row pb-2" style={{borderBottom: "solid 1px #c5c5c5"}}>
                    <Link className="col-1 bands-nav-link">
                        Home
                    </Link>  
                    <Link className="col-1 bands-nav-link">
                        Account
                    </Link>  
                    <Link className="col-2 bands-nav-link">
                        Create band
                    </Link> 
                </div>
             </div>
        </div>
     )
}


export default BandsNavigation;