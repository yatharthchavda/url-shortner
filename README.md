# URL Shortener

A simple, efficient URL shortening service built with Node.js, Express, and MongoDB.

## Overview

This URL shortener allows users to convert long URLs into shorter, more manageable links. It features user authentication, analytics tracking, and customizable short URLs.

## Features

- Create short URLs from long ones
- User authentication with JWT
- URL management for registered users
- Analytics for link clicks
- EJS-based web interface

## Technologies

- Node.js
- Express
- MongoDB with Mongoose
- EJS templating
- JWT for authentication
- Cookie-based authentication

## Project Structure

```
.
├── controllers/
│   ├── url.js
│   └── user.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── url.js
│   └── user.js
├── routes/
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
├── service/
│   └── auth.js
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── connect.js
├── index.js
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Install dependencies
```bash
npm install
```

3. Make sure MongoDB is installed and running on your system
```bash
# Start MongoDB service
# For Ubuntu/Debian
sudo service mongodb start
# For macOS with Homebrew
brew services start mongodb-community
```

4. Start the development server
```bash
npm start
```

The server will start on port 8001 by default.

## Usage

### Web Interface

Access the web interface at `http://localhost:8001` to:
- Create short URLs (login required)
- View your URL history
- See click analytics for your links

### Authentication Endpoints

- `POST /user/signup` - Create a new user account
- `POST /user/login` - Login to existing account

### URL Endpoints

- `POST /url` - Create a new short URL (authenticated users only)
- `GET /url/:shortId` - Redirect to the original URL
- `GET /analytics/:shortId` - View analytics for a specific URL

## Environment Setup

The application connects to a local MongoDB instance by default:
```
mongodb://localhost:27017/url-shortener
```

To change the database connection or port, modify the relevant sections in `index.js`.

## Development

Run the application with automatic restart on file changes:
```bash
npm start
```

This uses nodemon to watch for file changes and restart the server automatically.
