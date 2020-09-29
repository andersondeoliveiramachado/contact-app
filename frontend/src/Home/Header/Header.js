import ReactRoundedImage from "react-rounded-image";
import React from "react";
import Box from "@material-ui/core/Box";
import Cookies from 'universal-cookie';

import ellipse1 from "../assets/ellipse1.svg";
import ellipse2 from "../assets/ellipse2.svg";
import logout from "../assets/logout.svg";

import './Header.css';
import IconButton from "@material-ui/core/IconButton";

const cookies = new Cookies();
export default class Header extends React.Component {
    logout = () => {
        cookies.remove('jwt');
        window.location.href = ''
    }

    render() {
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" className='header'>
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems={'center'}>
                    <Box flex="9" display="flex" flexDirection="row" justifyContent="start"
                         className='user-info-container'>
                        <ReactRoundedImage
                            image={this.props.image}
                            roundedColor="#9AF6EE"
                            imageWidth="55"
                            imageHeight="55"
                            roundedSize="5"
                            hoverColor="#FFFFFF"
                        />
                        <Box display="flex" flexDirection="column" justifyContent="center" className='user-info'>
                            <div className='user-display-name'>{this.props.name}</div>
                            <div className='user-email'>{this.props.email}</div>
                        </Box>
                    </Box>
                    <IconButton flex="1" onClick={this.logout}>
                        <img src={logout} className='logout-image' alt="logoutBtn"/>
                    </IconButton>
                </Box>

                <img src={ellipse1} className='ellipse1' alt="overlay"/>
                <img src={ellipse2} className='ellipse2' alt="overlay"/>
            </Box>
        )
    }
}
