// import React, { useState, useEffect } from 'react';
// import { Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Loading from './LoadingComponent';
// import { editBand, loginSuccessful } from '../redux/ActionCreators';


// const mapDispatchToProps = {
//     editBand,
//     loginSuccessful,
// }
// const mapStateToProps = (bands, user) =>{
//     return {
//         bands,
//         user
//     }
// }

// const Profile = props => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [style, setStyle] = useState('');
//     const [description, setDescription] = useState('');
//     const [lineup, setLineup] = useState(0);
//     const [country, setCountry] = useState('');
//     const [city, setCity] = useState('');
//     const [zipcode, setZipcode] = useState(0);
//     const [sound, setSound] = useState(true);
//     const [subscriber, setSebscriber] = useState(null);


//     useEffect(() => {
//         setSebscriber(props.bands.user.user);
//     }, [])

//    function handleClick() {
//         const data = {
//             email,
//             password,
//             name,
//             style,
//             description,
//             lineup, 
//             country,
//             city,
//             zipcode,
//             sound
//         }
//         console.log(data)
// }
//     const client = subscriber || props.bands.user.user;
//     if (!client) {
//         return (       
//                 <div className="center-screen-loadingGif">
//                    <h5>You are not logged in...</h5> 
//                     <div>
//                         <Link to="/login">
//                             <Button className="btn-form-starter mr-2" style={{minWidth: "90px", backgroundColor: "#EE5407"}}>
//                                 Log-in
//                             </Button>
//                         </Link>
//                         <Link to="/home">
//                             <Button className="btn-form-starter" style={{minWidth: "90px", backgroundColor: "#EE5407"}}>
//                                 Sign-up
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>  
//         )
//     }
//     if (props.bands.user.loading) {
//         return (
//             <Loading />
//         )
//     } else {

    
//     return (
//         <div style={{display: props.displayBandForm}} className="container mt-5 p-5">
//             <form enctype="multipart/form-data" action="http://192.168.1.82:3001/upload" method="post">
//                 <div>
//                     <input type="file" name="image" 
//                         // onChange={(e) => uploadFile(e.target.files[0])}
//                     />
//                     <input type="text" />
//                     <button type="submit" >Submit</button>
//                 </div>
//             </form>
//         </div>
//     )}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);

   