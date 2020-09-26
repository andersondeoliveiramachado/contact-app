const {google} = require('googleapis');
const jwt = require('jsonwebtoken');

/**
 * Create an OAuth2 client with the given credentials, and then return a auth URL.
 */
function generateAuthUrl() {
    // Load client secrets from a local file.
    console.log('creating a authUrl');
    const oAuth2Client = new google.auth.OAuth2(
        process.env.CONTACT_CLIENT_ID,
        process.env.CONTACT_CLIENT_SECRET,
        process.env.CONTACT_REDIRECR_URL
    );
    const SCOPES = ['https://www.googleapis.com/auth/contacts.readonly'];
    return oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
}

function handleCallback(req, res){
    const oAuth2Client = new google.auth.OAuth2(
        process.env.CONTACT_CLIENT_ID,
        process.env.CONTACT_CLIENT_SECRET,
        process.env.CONTACT_REDIRECR_URL
    );

    if (req.query.error) {
        // The user did not give us permission.
        console.log(req.query.error);
        return res.redirect('/');
    } else {
        oAuth2Client.getToken(req.query.code, function(err, token) {
            if (err) {
                console.log(err);
                return res.redirect('/login');
            }

            // Store the credentials given by google into a jsonwebtoken in a cookie called 'jwt'
            res.cookie('jwt', jwt.sign(token, process.env.CONTACT_JWT_SECRET));
            return res.redirect('/home');
        });
    }
}

module.exports = {
    generateAuthUrl: generateAuthUrl,
    handleCallback: handleCallback
}
