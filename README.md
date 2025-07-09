# Organic Products API

Backend API for the Organic Product Viewer & Feedback Application

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Project Structure

```
.
├── config/         # Database configuration
├── controllers/    # Route controllers
├── models/        # Mongoose models
├── middleware/    # Custom middleware
├── routes/        # API routes
├── .env           # Environment variables
└── server.js      # Entry point
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/feedback` - Submit feedback for a product

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/organic-products-db
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Database Models

### Product
- name: String
- brand: String
- image: String
- description: String

### Feedback
- productId: ObjectId
- name: String
- message: String
