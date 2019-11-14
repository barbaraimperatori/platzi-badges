import React from 'react';
import headerImg from '../images/badge-header.svg';
// import myAvatar from '../images/avatar_me.jpg';
import './styles/Badge.css';
import Gravatar from './Gravatar';

class Badge extends React.Component {
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={headerImg} alt="encabezado"/>
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                    className="Badge__avatar" 
                    email={this.props.email}
                    alt="avatar"/>
                    <h1>{this.props.firstName} <br></br> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                </div>

                <div className="Badge__footer">@{this.props.twitter}</div>
            </div>
        )
    }
}

export default Badge;