# FodoDOT - Food Recipe and User Management System

A full-stack web application that combines food recipe search with user authentication and management.

## Features

- **User Authentication**
  - Sign up with email and password
  - Secure login system
  - User profile management
  - Password reset functionality

- **Recipe Search**
  - Search recipes from extensive database
  - View detailed recipe information
  - Save favorite recipes
  - Browse recipe categories

## Tech Stack

### Frontend
- React.js
- CSS3 for styling
- React Router for navigation
- Modern UI/UX design

### Backend
- FastAPI (Python)
- MongoDB for database
- JWT for authentication
- Beanie ODM for MongoDB

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+
- MongoDB 4.4+

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - Unix/MacOS:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Create a .env file with the following variables:
   ```
   SECRET_KEY=your_secret_key
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   HOST=localhost
   PORT=8000
   ```

6. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd foodverse-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- POST `/register` - User registration
- POST `/login` - User login
- GET `/user/me` - Get current user details

### Recipe Management
- GET `/recipes` - Get all recipes
- GET `/recipes/{id}` - Get specific recipe
- POST `/favourites` - Add recipe to favorites

## Database Structure

### Collections
- `user_data`: User information and authentication
- `user_chat_history`: Message history and user interactions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Recipe data provided by [Forkify API](https://forkify-api.herokuapp.com/)
- Icons from [Material Design Icons](https://materialdesignicons.com/) 