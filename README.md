<h1 align="center">Welcome to contact-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  
</p>

> A web platform that lets you track all you google contacts on the go,contact-app uses Google's People API get your fetch your contacts for you.

### ✨ [Demo](https://agile-coast-60792.herokuapp.com)

## Installation guide
##### Steps to run the local instance without docker 
```sh
# install dependencies
cd backend 
npm install
cd ..
cd frontend
npm install
cd ..

# run
cd backend
# build optimised build for front end
npm run build-frontend
# start node server
npm start
```

##### Steps to run the local instance with docker 
```sh
docker -v
docker pull kunalms/contact-app:latest
# update the file template.props.env with proper credentials from https://console.developers.google.com
docker run -p <custom_port>:3000 -d --env-file template.props.env kunalms/contact-app
```

## Author

👤 **Kunal Sharma**

* Website: https://kunalms.github.io/
* Twitter: [@Kunal\_Sharma\_](https://twitter.com/Kunal\_Sharma\_)
* Github: [@kunalms](https://github.com/kunalms)
* LinkedIn: [@kunal-sharma-680683114](https://linkedin.com/in/kunal-sharma-680683114)

## Show your support

Give a ⭐️ if this project helped you!

***
