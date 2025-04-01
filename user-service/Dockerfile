# Use Node.js 18 with build tools
FROM node:18

# Install necessary build tools
RUN apt-get update && apt-get install -y python3 make g++

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to optimize caching
COPY package*.json ./

# Install dependencies and force bcrypt to be rebuilt
RUN npm install && npm rebuild bcrypt

# Remove unnecessary build tools to reduce image size
RUN apt-get remove -y python3 make g++ && apt-get autoremove -y

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3001

# Start the application
CMD ["node", "server.js"]
