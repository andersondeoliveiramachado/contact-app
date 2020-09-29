<h1 align="center">Backend Overview</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  
</p>

> Contact App uses the following dependencies to run 
>
> * [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/).
> * [googleapis](https://github.com/googleapis) - Clients for Google APIs and tools that help produce them.
> * [jsonwebtoken](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

### ✨ [Demo](https://agile-coast-60792.herokuapp.com)

## Installation guide 
```sh
cd <project_root>
cd backend
# install dependencies 
npm install
cd ..
```

## How to run
##### make sure you set the following environment variables before running:

CONTACT_CLIENT_ID, CONTACT_CLIENT_SECRET, CONTACT_REDIRECT_URL, CONTACT_JWT_SECRET

Here is a quick guide on [how to set environment variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html).

* CONTACT_CLIENT_ID - holds the ID generated at the console for your oAuth Client
* CONTACT_CLIENT_SECRET - secret key for the client
* CONTACT_REDIRECT_URL - the redirect url that will be called once authentication is success <baseURL>/auth/callback
* CONTACT_JWT_SECRET - this can be a random string which will be used to sign your jwt tokens.
```
cd <project_root>
cd backend
# build optimised build for front end
npm run build-frontend
# start server
npm start
```

