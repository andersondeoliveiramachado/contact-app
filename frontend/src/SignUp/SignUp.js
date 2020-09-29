import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import googleIcon from './assets/google-icon.svg';

import './SignUp.css';
import Background from "../Background/Background";
import withStyles from "@material-ui/core/styles/withStyles";
import Auth from "../services/Auth";

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(4, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(4),
        backgroundColor: 'white',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(5),
    },
    submit: {
        padding: theme.spacing(1, 2),
        margin: theme.spacing(4, 0),
    }
});

class SignUp extends React.Component {
    state = {
        redirectUrl: null
    }

    componentDidMount() {
        Auth.getRedirectUrl((res) => {
            this.setState({redirectUrl: res.data.authUrl})
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <Container className="container" component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Background/>
                    <Avatar className={classes.avatar}>
                        <img src={googleIcon} alt="google icon"/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in with Google
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                        </Grid>
                        <Button
                            disabled={!this.state.redirectUrl}
                            onClick={(event) => {
                                event.preventDefault();
                                window.location.href = this.state.redirectUrl;
                            }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(SignUp);
