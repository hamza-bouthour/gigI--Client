import React, { useState } from 'react';

const CommentHome = props => {
    const {userComment} = props
    return (
        <div className="home-comment-box">
            <div style={{borderBottom: "solid 1px #039FB6", paddingBottom: "5px"}}>
                <h5 style={{marginBottom: "-5px", color: "#039FB6"}}>{userComment.name}</h5>
                <span style={{fontSize: "12px", color: "039FB6"}}>{userComment.info}</span>     
            </div>
            
            <div className="mt-1">
                <p>{userComment.comment}</p>
            </div>
        </div>

    )
}


export default CommentHome;