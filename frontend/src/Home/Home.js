import React from 'react';
import './Home.css';
import Background from "../Background/Background";
import UserService from "../services/User";
import Header from "./Header/Header";
import ContactList from "./ContactList/ContactList";
import Box from "@material-ui/core/Box";

class Home extends React.Component {
    state = {
        contacts: [],
        userInfo: null,
        totalItems: 0,
        totalPeople: 0
    }

    componentDidMount() {
        UserService.getUserInfo((res) => {
            this.setState({userInfo: res.data.data});
        });
    }

    render() {
        return (
            <div>
                <Background/>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Header email={this.state.userInfo?.emailAddresses[0].value}
                            name={this.state.userInfo?.names[0]?.displayName}
                            image={this.state.userInfo?.photos[0]?.url}/>

                    <ContactList/>
                </Box>
            </div>
        );
    }
}

export default Home;
