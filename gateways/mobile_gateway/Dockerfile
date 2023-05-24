# Specify the base image with Node.js Alpine
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port on which the application runs
EXPOSE 4000

# Specify the command to run the application
CMD ["npm", "run", "dev"]
