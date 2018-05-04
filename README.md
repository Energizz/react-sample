Voxeet React Sample
=====================

# Instructions

### Developpement mode

1. Checkout project
2. `npm install`
3. Start for development with `CONSUMER_KEY='YOUR_CONSUMER_KEY' CONSUMER_SECRET='YOUR_CONSUMER_SECRET' npm start` and open `http://localhost:8080` with your browser


### Build

1. Checkout project
2. `npm install`
3. `CONSUMER_KEY='YOUR_CONSUMER_KEY' CONSUMER_SECRET='YOUR_CONSUMER_SECRET' npm build`

The build artifacts will be stored in the dist/ directory.

#### via Docker

1. Create docker image : `docker build --no-cache --build-arg CONSUMER_KEY='YOUR CONSUMER KEY' --build-arg CONSUMER_SECRET='YOUR CONSUMER SECRET' -t voxeet-react-sample .` 
2. Run : `docker run -p 3000:80 voxeet-react-sample` 
3. Open `http://localhost:3000` with your browser (Chrome or Firefox)


