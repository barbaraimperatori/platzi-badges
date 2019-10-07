import React from 'react';
import Navbar from '../components/Navbar';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="image-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Bárbara"
                                lastName="Imperatori"
                                twitter="ramblinn_"
                                jobTitle="FrontEnd Developer"
                                avatarURL="https://avatars0.githubusercontent.com/u/38469360?s=460&v=4"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;