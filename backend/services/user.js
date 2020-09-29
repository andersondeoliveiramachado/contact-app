const {google} = require('googleapis');
const jwt = require('jsonwebtoken');

function getoAuthClient() {
    return new google.auth.OAuth2(
        process.env.CONTACT_CLIENT_ID,
        process.env.CONTACT_CLIENT_SECRET,
        process.env.CONTACT_REDIRECT_URL
    );
}

function getUserInfo(req, res) {
    const oAuthClient = getoAuthClient();
    oAuthClient.credentials = jwt.verify(req.cookies.jwt, process.env.CONTACT_JWT_SECRET);
    const service = google.people({version: 'v1', auth: oAuthClient});
    
    service.people.get({
        resourceName: 'people/me',
        personFields: 'names,phoneNumbers,emailAddresses,photos'
    }, (err, data) => {
        if (err) return console.error('The API returned an error: ' + err);
        res.send(data);
    });
}

function getUserContactList(req, res) {
    const oAuthClient = getoAuthClient();
    oAuthClient.credentials = jwt.verify(req.cookies.jwt, process.env.CONTACT_JWT_SECRET);
    const service = google.people({version: 'v1', auth: oAuthClient});

    service.people.connections.list({
        resourceName: 'people/me',
        pageSize: 100,
        sortOrder: 'FIRST_NAME_ASCENDING',
        pageToken: req.query.pageToken,
        personFields: 'names,phoneNumbers,emailAddresses,photos',
    }, (err, response) => {
        if (err) return console.error('The API returned an error: ' + err);
        res.send(response.data);
    });
}

module.exports = {
    getUserInfo: getUserInfo,
    getUserContactList: getUserContactList
}
