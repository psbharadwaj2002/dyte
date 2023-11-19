## ABOUT TASK

This project is a MERN (MongoDB, Express.js, React, Node.js) stack-based log management system. It enables efficient ingestion, storage, and querying of log data through a user-friendly interface.

## Backend Server (MongoDB, Express, Node)

-> The backend server, implemented with Express.js, offers a RESTful API for log management on port 3000 as mentioned in task description.
-> Endpoints for ingesting logs (POST /ingestLogs) and fetching logs (GET /getLogs).
-> The ingestion endpoint supports both single and multiple log entries, while the retrieval endpoint allows various filters for targeted log queries.

To start backend: "npm run dev" or "nodemon index.js"

## Frontend (React)

-> The client-side UI, built with React, provides an interactive and responsive experience for log querying.
-> It features multiple input filters for precise log searches and utilizes Flexbox for a flexible layout, ensuring responsiveness across different screen sizes.
-> We can give multiple filters

Getting Started

To set up the project locally, clone the repository, install dependencies, and start the development server. Access the application in your browser at http://localhost:3000.
