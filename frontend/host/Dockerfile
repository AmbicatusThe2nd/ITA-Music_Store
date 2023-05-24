# Use a base image with Node.js pre-installed
FROM node:16-alpine

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application using Webpack
RUN npm run build

# Expose port 3333
EXPOSE 3200

# Start the application with npm start
CMD ["npm", "start"]
