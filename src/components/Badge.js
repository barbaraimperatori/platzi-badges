import React from 'react';
 import headerImg from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <img src={headerImg} alt="encabezado"/>
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"/>
                    <h1>Barbara <br></br> Imperatori</h1>
                </div>

                <div>
                    <p>Frontend Developer</p>
                </div>

                <div>
                    @ramblinn_
                </div>
            </div>
        )
    }
}

export default Badge;