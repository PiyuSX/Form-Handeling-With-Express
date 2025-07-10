# Form Handling with React and Express

This is a basic full-stack project demonstrating form handling using **React** on the frontend and **Express** on the backend.

## Project Overview

- **Frontend:** Built with React.  
- **Backend:** Built with Express.js.  
- **Functionality:**  
  The frontend provides a simple form with two input fields — **Name** and **Password**.  
  On submitting the form, the input data is sent to the backend where it is received and logged.

## Live Demo

- Frontend: [https://form-handeling-with-express.vercel.app/](https://form-handeling-with-express.vercel.app/)  
- Backend: [https://form-handeling-backend.onrender.com/](https://form-handeling-backend.onrender.com/)

## How It Works

1. User enters **Name** and **Password** on the frontend form.  
2. On submit, the data is sent via a POST request to the Express backend.  
3. Backend receives the data and logs the user input (name and password).  

## Technologies Used

- React  
- Express.js  
- Fetch API for HTTP requests  
- CORS enabled on backend  

## Getting Started

To run this project locally:

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd <project-folder>
Install dependencies for both frontend and backend:

bash
Copy
Edit
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
Run the backend server:

bash
Copy
Edit
cd ../backend
nodemon server.js
Run the frontend development server:

bash
Copy
Edit
cd ../frontend
npm run dev
Access the apps locally:

Frontend: http://localhost:5173/

Backend: http://localhost:3000/
