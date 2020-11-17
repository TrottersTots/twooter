import React from 'react'
import {Avatar} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import '../styles/ProfilePreview.css';

function ProfilePreview({displayName, username, bio, verified, avatar}) {
    return (
        <div className="profilePreview">
            <div className="profilePreview__header">
                <span className="personIcon"><PersonIcon/></span>
                <p className="profilePreview__header__p">Ajit Pai follows</p>
            </div>
            <div className="profilePreview__content">
                <div className="profilePreview__avatar">
                    <Avatar src={process.env.PUBLIC_URL+"/avatars/"+ avatar +".jpg"} />
                </div> 
                <div className="profilePreview__names">
                    <div className="profilePreview__names__content">
                        <h3>{displayName} <span>{Boolean(verified) && <CheckCircleIcon/>}</span></h3> {/* replace with displayName */}
                        <p>@{username}</p> {/* replace with username */}
                    </div>
                        
                </div>
                <div className="profilePreview__bio">
                    <p>{bio}</p> {/* replace with bio */}
                </div>
            </div>
        </div>
    )
}

export default ProfilePreview
