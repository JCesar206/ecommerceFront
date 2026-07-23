# 🛒 DevShop - Full Stack Ecommerce

A modern Full Stack Ecommerce application built with **React**, **Node.js**, **Express**, and **MySQL**.

This project was developed as a portfolio application focused on learning full deployment, authentication, database integration, and production environments.

---

# 🚀 Live Demo

### Frontend

https://jcesar206.github.io/ecommerceFront/

### Backend API

https://ecommerceback-grlk.onrender.com

---

# 📸 Features

- User Authentication (JWT)
- Register & Login
- Protected Routes
- Admin Dashboard
- Product Catalog
- Shopping Cart
- Checkout Simulation
- Responsive Design
- Dark / Light Theme
- English / Spanish Language Support
- Product Images
- REST API

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Axios
- TailwindCSS
- Context API
- React Icons
- Vite

## Backend

- Node.js
- Express
- JWT Authentication
- bcryptjs
- Cookie Parser
- Morgan
- Winston Logger

## Database

- MySQL
- Aiven Cloud Database

## Deployment

- GitHub Pages
- Render
- Aiven

---

# 📂 Project Structure

```
Front
│
├── components
├── context
├── layouts
├── pages
├── routes
├── services
├── api
└── utils

Back
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
├── uploads
├── database
└── utils
```

---

# 🔐 Authentication

Authentication is implemented using:

- Access Token (JWT)
- Refresh Token
- Protected Routes
- Admin Middleware

---

# 🗄 Database

Main tables:

- users
- products
- refresh_tokens

---

# 🌎 Deployment

Frontend deployed on:

- GitHub Pages

Backend deployed on:

- Render

Database hosted on:

- Aiven MySQL

---

# 📷 Images

Product images are served from the backend using Express Static Middleware.

```
/uploads
```

---

# 📦 Installation

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
npm install
npm run db:init
npm run db:seed
npm run dev
```

---

# 🔧 Environment Variables

Backend

```env
PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
ACCESS_TOKEN_EXPIRE=
REFRESH_TOKEN_EXPIRE=
```

Frontend

```env
VITE_API_URL=
```

---

# 📚 What I Learned

During this project I learned how to:

- Deploy a complete Full Stack application
- Configure GitHub Pages
- Configure Render
- Connect a cloud MySQL database
- Implement JWT Authentication
- Debug production deployments
- Configure CORS
- Handle Environment Variables
- Serve static assets in production
- Build a responsive React application

---

# 📌 Future Improvements (v1.1)

- Cloudinary Integration
- Product Search
- Categories
- Pagination
- Order History
- Payment Gateway (Stripe)
- User Profile Management
- Unit Testing
- Docker Support

---

# 👨‍💻 Author

Julio César

Full Stack Developer

Built with ❤️ using React + Node.js
