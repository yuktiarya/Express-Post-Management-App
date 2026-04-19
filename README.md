# 📌 Express Post Management App

A simple CRUD web application built with Node.js, Express, and EJS. It lets users create, view, edit, and delete posts with RESTful routing and method override support.

## 🚀 Features
- Create new posts
- View all posts
- View one post
- Edit existing posts
- Delete posts
- RESTful route structure
- EJS templating
- Static CSS styling
- Dynamic port support for deployment

## 🧩 Tech Stack
- Node.js
- Express.js
- EJS
- CSS
- UUID
- Method Override

## 📁 Project Structure
- `index.js` — Application entry point and route definitions
- `package.json` — Dependencies and scripts
- `views/` — EJS templates for pages
- `public/` — Static assets like `style.css`

## 🚀 Local Setup
1. Clone the repository:
   ```powershell
   git clone <your-repo-url>
   cd "D:\Full Stack\REST_CLASS"
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
   
## 🔧 Available Routes
| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/` | Redirects to `/posts` |
| GET | `/posts` | Show all posts |
| GET | `/posts/news` | Render new post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | Show a single post |
| GET | `/posts/:id/edit` | Edit post form |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

## 🛠 Render Deployment
When deploying on Render, use the following settings:
- `Build Command`: `npm install`
- `Start Command`: `npm start`
- `Root Directory`: leave blank
- `Branch`: `main`

Render will use the dynamic port from `process.env.PORT`, so the app can run correctly in the cloud.

## 📌 Notes
- The app uses `method-override` so HTML forms can send `PATCH` and `DELETE` requests.
- Posts are stored in memory, so restarting the server resets the data.
- You can customize and extend this app by adding a database like MongoDB or PostgreSQL.
