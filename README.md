Blog Web Application (Node.js + Express)
📌 Description

This project is a simple Blog web application built using Node.js and Express.
It allows users to create, view, edit, and delete blog posts.

Posts are stored temporarily in memory (no database), so they will reset when the server restarts.

🚀 Features
Create new blog posts
View all blog posts
Edit existing posts
Delete posts
Clean and structured backend logic
🛠️ Technologies Used
Node.js
Express.js
JavaScript
📂 Project Structure

/controllers → Handles logic (posts)
/routes → Defines API endpoints
/app.js → Main server file

📡 API Endpoints
Get all posts

GET /posts

Create a post

POST /posts
Body:
{
"title": "Post title",
"content": "Post content"
}

Update a post

PUT /posts/

Delete a post

DELETE /posts/

▶️ How to Run
Install dependencies
npm install
Start server
node app.js
Open in browser or Postman
http://localhost:3000/posts
⚠️ Notes
Data is not persistent (no database yet)
This project focuses on backend logic and routing
📈 Future Improvements
Add database (PostgreSQL)
Add authentication (JWT)
Connect with a React frontend