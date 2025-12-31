# 🎬 Movie Rating Blog Application (MERN Stack)

A full-stack **Movie Rating & Review Blog Application** built using the **MERN stack**.  
This project allows users to explore movies, view ratings, and read detailed descriptions while demonstrating seamless frontend–backend integration.

Designed as an academic project, it showcases real-world **MERN development practices** and clean project architecture.

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- React Router DOM  
- Axios  
- Bootstrap / CSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- Mongoose  

---

## ✨ Features

- Browse a list of movies with ratings  
- View detailed movie information:
  - Title  
  - Genre  
  - Cast  
  - Rating  
  - Description  
- RESTful API architecture  
- Dynamic routing for movie pages  
- Clean separation of frontend and backend  
- Scalable and modular code structure  

---

## 📂 Project Structure

Movie_Rating_Application/
│
├── Backend/
│ ├── models/ # Database schemas
│ ├── controllers/ # Business logic
│ ├── routes/ # API routes
│ └── server.js # Backend entry point
│
├── Frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page-level components
│ │ ├── App.js
│ │ └── index.js
│
├── .gitignore
├── package.json
└── README.md


---

## 🌐 Running the Application

- **Frontend:** http://localhost:3000  
- **Backend:** http://localhost:4000  

---

## 🔗 API Endpoints

| Method | Endpoint        | Description              |
|------|----------------|--------------------------|
| GET  | `/movies`       | Fetch all movies         |
| GET  | `/movies/:id`   | Fetch movie by ID        |
| POST | `/movies`       | Add a new movie          |
| PUT  | `/movies/:id`   | Update movie details     |
| DELETE | `/movies/:id` | Delete a movie           |

---

## 🧠 Learning Outcomes

- MERN stack application architecture  
- REST API development using Express  
- MongoDB schema design with Mongoose  
- React routing and component-based UI  
- Frontend–backend integration using Axios  
- Practical Git & GitHub workflow experience  

---

## 🚀 Future Enhancements

- User authentication (Login & Signup)  
- User reviews and comments  
- Average rating calculation  
- Search and filter functionality  
- Admin dashboard  
- Deployment on cloud platforms  

