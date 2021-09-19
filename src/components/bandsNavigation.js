
import { Link } from 'react-router-dom';

const BandsNavigation = () => {
     return (
            <div className="container mb-5">
                <div className="row pb-2" style={{borderBottom: "solid 1px #c5c5c5"}}>
                    <Link className="col-3 col-md-2 bands-nav-link" to="/home">
                        Home
                    </Link>  
                    <Link className="col-3 col-md-2 bands-nav-link" to="/profile">
                        Account
                    </Link>  
                    <Link className="col-6 bands-nav-link" to="/artists">
                        Create band
                    </Link> 
                </div>
            </div> 
        )
}

export default BandsNavigation;