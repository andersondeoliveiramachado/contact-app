# PHASE 1: frontend build
FROM node:12 as frontend
# Create app directory
WORKDIR /usr/src/frontend/
# Copy over the package.json for frontend.
COPY frontend/package*.json ./
# Install app dependencies
RUN yarn install
# Copy the code
COPY frontend/ ./
# Run a prod build
RUN yarn build

# PHASE 2: backend build
FROM node:12

WORKDIR /usr/src/app/
# Copy over the code from frontend folder
COPY --from=frontend /usr/src/frontend/build/ ./frontend/build/
WORKDIR /usr/src/app/server/
# Copy over the package.json from backend folder
COPY backend/package*.json ./
# Run npm install
RUN npm install
# copy code inside backend dir
COPY backend/ ./
#EXPOSE 3000
# start backend server
CMD ["npm", "start"]
