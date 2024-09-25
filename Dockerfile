# Use the official Node.js image as a base image
FROM node:18

LABEL org.opencontainers.image.authors="Akshay Shahi"

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "index.js"]
