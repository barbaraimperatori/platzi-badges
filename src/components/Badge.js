import React from 'react';
import headerImg from '../images/badge-header.svg';
import myAvatar from '../images/avatar_me.jpg';
import './styles/Badge.css';

class Badge extends React.Component {
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={headerImg} alt="encabezado"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={myAvatar} alt="avatar"/>
                    <h1>Barbara <br></br> Imperatori</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Frontend Developer</h3>
                </div>

                <div className="Badge__footer">@ramblinn_</div>
            </div>
        )
    }
}

export default Badge;