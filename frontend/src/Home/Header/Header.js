import ReactRoundedImage from "react-rounded-image";
import React from "react";
import Box from "@material-ui/core/Box";

import ellipse1 from "../assets/ellipse1.svg";
import ellipse2 from "../assets/ellipse2.svg";

import './Header.css';

export default class Header extends React.Component {

    render() {
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" className='header'>
                <Box display="flex" flexDirection="row" justifyContent="start" className='user-info-container'>
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

                <img src={ellipse1} className='ellipse1' alt="overlay"/>
                <img src={ellipse2} className='ellipse2' alt="overlay"/>
            </Box>
        )
    }
}
