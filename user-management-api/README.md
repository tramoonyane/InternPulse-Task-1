User Management API

A RESTful API for managing user data, built with Node.js, Express, and MongoDB. This API provides endpoints to create, read, update, and delete user records using an in-memory MongoDB database for testing purposes.

Table of Contents

Features

Technologies Used

Installation

Configuration

API Endpoints

Create User

Get Users

Get User by ID

Update User

Delete User

Testing

Using curl

Using Invoke-WebRequest

Contributing

License

Features

Full CRUD functionality for user records.

In-memory MongoDB setup for testing and development.

Technologies Used
Node.js: JavaScript runtime for server-side applications.

Express: Web framework for building APIs.
MongoDB: NoSQL database for data storage.
mongodb-memory-server: In-memory MongoDB server for testing.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
Install Dependencies

bash
Copy code
npm install
Start the Server

bash
Copy code
npm start
The server will be available at http://localhost:3000.

Configuration
The API uses an in-memory MongoDB instance for testing. Database configuration and management are handled in the src/config/db.js file.

Configuration File
The configuration for the in-memory MongoDB server is as follows:

javascript
Copy code
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

const startDatabase = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  if (!uri) {
    throw new Error('Failed to get MongoDB URI');
  }

  await mongoose.connect(uri);

  console.log('Connected to in-memory MongoDB');
};

const stopDatabase = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

module.exports = { startDatabase, stopDatabase };
API Endpoints
Create User
Endpoint: POST /api/users
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
Response:
Status Code: 201 Created
Content:
json
Copy code
{
  "name": "John Doe",
  "_id": "unique_user_id",
  "__v": 0
}
Get Users
Endpoint: GET /api/users
Response:
Status Code: 200 OK
Content:
json
Copy code
[
  {
    "_id": "unique_user_id",
    "name": "John Doe",
    "__v": 0
  }
]
Get User by ID
Endpoint: GET /api/users/:userId
Response:
Status Code: 200 OK
Content:
json
Copy code
{
  "_id": "unique_user_id",
  "name": "John Doe",
  "__v": 0
}
Update User
Endpoint: PUT /api/users/:userId
Request Body:
json
Copy code
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 31
}
Response:
Status Code: 200 OK
Content:
json
Copy code
{
  "_id": "unique_user_id",
  "name": "Updated Name",
  "__v": 0
}
Delete User
Endpoint: DELETE /api/users/:userId
Response:
Status Code: 204 No Content
Testing
Using curl
You can test the API endpoints using curl commands. Below are examples of how to perform CRUD operations:

Create User

bash
Copy code
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
Get Users

bash
Copy code
curl http://localhost:3000/api/users
Get User by ID

bash
Copy code
curl http://localhost:3000/api/users/66c66f53c01b88dcbd298ebb
Update User

bash
Copy code
curl -X PUT http://localhost:3000/api/users/66c66f53c01b88dcbd298ebb \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name", "email": "updated@example.com", "age": 31}'
Delete User

bash
Copy code
curl -X DELETE http://localhost:3000/api/users/66c66f53c01b88dcbd298ebb
Using Invoke-WebRequest in PowerShell
You can also use Invoke-WebRequest in PowerShell to interact with the API. Here are the equivalent commands:

Create User

powershell
Copy code
Invoke-WebRequest -Uri http://localhost:3000/api/users `
  -Method POST `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{"name": "John Doe", "email": "john@example.com", "age": 30}'
Get Users

powershell
Copy code
Invoke-WebRequest -Uri http://localhost:3000/api/users `
  -Method GET
Get User by ID

powershell
Copy code
Invoke-WebRequest -Uri http://localhost:3000/api/users/66c66f53c01b88dcbd298ebb `
  -Method GET
Update User

powershell
Copy code
Invoke-WebRequest -Uri http://localhost:3000/api/users/66c66f53c01b88dcbd298ebb `
  -Method PUT `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{"name": "Updated Name", "email": "updated@example.com", "age": 31}'
Delete User

powershell
Copy code
Invoke-WebRequest -Uri http://localhost:3000/api/users/66c66f53c01b88dcbd298ebb `
  -Method DELETE
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the project's coding standards and includes relevant tests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

