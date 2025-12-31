A full-stack Movie Rating & Review Blog Application built using the MERN stack.
Users can view movies, read detailed descriptions, and explore ratings, while the platform demonstrates complete frontend–backend integration using modern web technologies.

This project is designed as a learning-focused MERN application and showcases REST APIs, database integration, and React-based UI development.

🚀 Tech Stack
Frontend

React.js

React Router DOM

Axios

CSS / Bootstrap (for styling)

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

✨ Features

Display a list of movies with ratings

View detailed movie information

Movie name

Genre

Cast

Rating

Description

RESTful APIs for movie data

Dynamic routing for individual movie pages

Clean separation of frontend and backend

Scalable project structure following MERN best practices

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Prathamesh02092004/Movie_Rating_Application.git
cd Movie_Rating_Application

2️⃣ Backend Setup
cd Backend
npm install


Create a .env file inside the Backend folder:

PORT=4000
MONGO_URI=your_mongodb_connection_string


Start the backend server:

npm start

3️⃣ Frontend Setup
cd ../Frontend
npm install
npm start


Frontend will run on:

http://localhost:3000


Backend will run on:

http://localhost:4000

🔗 API Endpoints
Method	Endpoint	Description
GET	/movies	Fetch all movies
GET	/movies/:id	Fetch movie by ID
POST	/movies	Add a new movie
PUT	/movies/:id	Update movie details
DELETE	/movies/:id	Delete a movie
🧠 Learning Outcomes

Understanding MERN stack architecture

REST API design using Express

MongoDB schema design with Mongoose

React state management and routing

Connecting frontend and backend using Axios

Handling real-world Git & GitHub workflows

🔮 Future Enhancements

User authentication (Login & Signup)

User-submitted movie reviews

Average rating calculation

Admin dashboard for movie management

Search and filter movies

Deployment using Render / Vercel / MongoDB Atlas
