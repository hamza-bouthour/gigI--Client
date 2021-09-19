import React from 'react';

const CommentHome = props => {
    const {userComment} = props
    return (
        <div className="home-comment-box">
            <div style={{borderBottom: "solid 1px #039FB6", paddingBottom: "5px"}}>
                <h6 style={{marginBottom: "-5px", color: "#fff"}}>{userComment.name}</h6>
                <span style={{fontSize: "12px", color: "039FB6"}}>{userComment.info}</span>     
            </div>
            
            <div className="mt-1">
                <p style={{fontSize: "12px"}}>{userComment.comment}</p>
            </div>
        </div>

    )
}

export default CommentHome;