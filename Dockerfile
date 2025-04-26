# Use official Node.js image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package.json and lock file first (for caching)
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the entire project
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
