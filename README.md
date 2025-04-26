# Incident Log API

## Description

Incident Log API is a RESTful web service designed for managing incidents. It allows users to create, update, delete, and track incidents. The API supports features like filtering and pagination, and it provides a health check route to monitor system status. It is built using Node.js, Express, and MongoDB.

## Language and Framework Choice

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB
- **Testing Framework:** Jest and Supertest
- **Containerization:** Docker
- **Continous Integration:** Jenkins
- **Container-Orchestration:** Kubernetes and ArgoCD
- **Deployment:** AWS Cloud

## Features

- **Create Incidents**: Allows the creation of new incidents.
- **Update Incidents**: Update the status and severity of an incident.
- **Delete Incidents**: Delete incidents by their ID.
- **Get Incidents**: Fetch all incidents or a specific incident by ID.
- **Pagination**: Supports pagination for large datasets.
- **Filtering**: Supports filtering incidents based on criteria like status and severity.
- **Health Check**: A health check endpoint to monitor the API status.

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/incident-log-api.git
```

2. Navigate into the project directory:

```bash
    cd incident-log-api
```

3. Install dependencies:

```bash
    npm install
```

4. Create a .env file in the root of the project and add the following variables:

```bash
    MONGODB_URI=mongodb://localhost:27017/incidentlog
    PORT=5000
```

5. Test the health check

```bash
    npx jest
```

6. Run the application:

```bash
    npm start
```

## Database Setup and Configuration

The application uses **MongoDB** as its database.

### Setting Up MongoDB Locally

1. Install MongoDB Community Edition from the [official MongoDB documentation](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server locally:
```bash
mongod --dbpath /your/local/dbpath
```
By default, MongoDB runs on mongodb://localhost:27017.

### Environment Variables
Create a .env file in the root directory of the project and configure the following environment variables:
```bash
MONGODB_URI=mongodb://localhost:27017/incidentlog
PORT=5000
```
* MONGODB_URI: The connection string for your MongoDB instance.

* PORT: The port on which the API server will run.

⚡ Note: Make sure the MongoDB instance is running before starting the application.

### Database Schema
There is no need for manual schema setup in MongoDB.
The application uses Mongoose for schema modeling, and it will automatically create the necessary collections (incidents) when you perform operations via the API.


## Usage

### Swagger Documentation

To interact with the API using Swagger UI, visit the following endpoint after starting the application:

```bash
http://localhost:5000/api-docs
```

This will open the Swagger UI where you can explore the available endpoints, try them out, and view detailed information about each API operation.

### API Documentation (Markdown)

You can refer to the detailed API documentation in Markdown format for a complete guide on using the endpoints, request formats, and responses. The file can be found in the repository as `api-documentation.md`. [View API Documentation]('./api-documentation.md')

## Deployment Overview

The Incident Log API is containerized using **Docker**.  
The Docker image has been built and pushed to Docker Hub.

You can pull and run the API locally using the following commands:

```bash
docker pull vikasprince/incident-log-api:v1.0.0

docker run -d -p 5000:5000 --name incident-log-api \
  -e MONGODB_URI=mongodb://your-mongo-uri:27017/incidentlog \
  vikasprince/incident-log-api:v1.0.0

```

I have also created Kubernetes manifests and a Jenkins pipeline for production-grade deployment and automation.

## Conclusion

The **Incident Log API** is a powerful tool for managing incidents in a simple and efficient manner. With support for creating, updating, deleting, and tracking incidents, as well as features like pagination, filtering, and health checks, it provides all the essential functionalities required for an incident management system.

This API is designed with scalability in mind and leverages Docker for containerization, ensuring it can run consistently across different environments. It is also integrated with Jenkins for continuous integration and deployment, providing an automated pipeline for seamless deployment.

By following the installation and usage instructions provided in this document, you can easily set up, configure, and deploy the API locally or in production environments using Docker and Kubernetes. The included Swagger documentation allows you to explore and test the API interactively.

Whether you are looking to deploy this API for personal use or integrate it into a larger incident management system, the **Incident Log API** is flexible, easy to deploy, and production-ready.

