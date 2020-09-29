const {google} = require('googleapis');
const jwt = require('jsonwebtoken');

function getoAuthClient() {
    return new google.auth.OAuth2(
        process.env.CONTACT_CLIENT_ID,
        process.env.CONTACT_CLIENT_SECRET,
        process.env.CONTACT_REDIRECT_URL
    );
}

/**
 * Create an OAuth2 client with the given credentials, and then return a auth URL.
 */
function generateAuthUrl() {
    // Load client secrets from a local file.
    console.log('creating a authUrl');
    const oAuth2Client = getoAuthClient();
    const SCOPES = [
        'https://www.googleapis.com/auth/contacts',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/user.phonenumbers.read'
    ];
    return oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
}

function handleCallback(req, res) {
    const oAuth2Client = getoAuthClient();

    oAuth2Client.getToken(req.query.code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
            if (err) return console.error(err);
            console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
    });
    console.log(req.query.code);
    if (req.query.error) {
        // The user did not give us permission.
        console.log(req.query.error);
        return res.redirect('/');
    } else {
        oAuth2Client.getToken(req.query.code, function (err, token) {
            if (err) {
                console.log(err);
                return res.redirect('/signin');
            }

            // Store the credentials given by google into a jsonwebtoken in a cookie called 'jwt'
            res.cookie('jwt', jwt.sign(token, process.env.CONTACT_JWT_SECRET));
            return res.redirect('/');
        });
    }
}

module.exports = {
    generateAuthUrl: generateAuthUrl,
    handleCallback: handleCallback
}
