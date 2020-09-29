import React from "react";
import Card from "@material-ui/core/Card";
import ReactRoundedImage from "react-rounded-image";
import Box from "@material-ui/core/Box";
import bin from "../../assets/bin.svg";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = () => ({

    root: {
        margin: '12px 0px',
        borderRadius: '12px'
    },
    content: {
        padding: '6px 12px',
        borderRadius: '12px'
    },
    name: {
        marginLeft: '10px'
    }
});

class ContactCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {shadow: 1, hover: false}
    }

    getRandomColor() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    onMouseOver = () => {
        this.setState({shadow: 8, hover: true});
    }
    onMouseOut = () => {
        this.setState({shadow: 1, hover: false});
    }

    render() {
        const {classes} = this.props;
        return (
            <Box onMouseOver={this.onMouseOver}
                 onMouseOut={this.onMouseOut}
                 boxShadow={this.state.shadow}
                 className={classes.root}>
                <Card className={classes.content}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Box flex="1" flexDirection="row" justifyContent="start" alignItems="start">
                            <ReactRoundedImage flex="1"
                                               image={this.props.contact.photos[0].url}
                                               roundedColor={this.getRandomColor()}
                                               imageWidth="45"
                                               imageHeight="45"
                                               roundedSize="5"/>
                        </Box>
                        <Box flex="4" alignItems="start" className={classes.name}>
                            {this.props.contact.names?.length ? this.props.contact.names[0].displayName : '--'}
                        </Box>
                        <Box flex="4" alignItems="start">
                            {this.props.contact.emailAddresses?.length ? this.props.contact.emailAddresses[0].value : '--'}
                        </Box>
                        <Box flex="3" alignItems="start">
                            {this.props.contact.phoneNumbers?.length ? this.props.contact.phoneNumbers[0].canonicalForm : '--'}
                        </Box>
                        <Box flex="1" alignItems="end">{this.state.hover ? <img src={bin} alt="bin"/> : ''}</Box>
                    </Box>
                </Card>
            </Box>
        )
    }
}

export default withStyles(useStyles)(ContactCard);
