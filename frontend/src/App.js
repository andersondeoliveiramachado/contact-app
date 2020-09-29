import React from 'react';
import './App.css';
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import SignUp from "./SignUp/SignUp";
import Home from "./Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0A45C2'
        }
    },
});


function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/signin" component={SignUp}/>
                    <PrivateRoute path="/">
                        <Home/>
                    </PrivateRoute>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
