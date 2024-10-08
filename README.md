Backend Project (5-Card-Draw Backend)
1. Project Overview
The backend of the 5-Card-Draw Poker game API handles card shuffling, dealing hands, and evaluating poker hands. It exposes a REST API for the frontend to interact with.

2. Technologies Used
Node.js: JavaScript runtime environment
Express: Web framework for building REST APIs
JavaScript (ES6+): Main language used
Vercel: For serverless deployment

4. Prerequisites
Make sure you have the following installed on your machine:

Node.js (version 14 or later)
npm (Node package manager)

4. Installation
Clone the repository:

git clone https://github.com/devbongz/5-card-draw.git
cd 5-card-draw
Install dependencies:

npm install

5. Running the Backend Locally
To start the server locally, run:

npm start
The backend server should start at http://localhost:3000.

6. API Endpoints
POST /api/game/deal
Description: Shuffles the deck, deals a hand, and evaluates the hand.
Response:
json
{
  "hand": [
    "Q of Hearts",
    "9 of Clubs",
    "5 of Clubs",
    "K of Spades",
    "9 of Hearts"
  ],
  "evaluation": "Highest card: 13"
}
7. Project Structure

5-card-draw-backend/
│
├── controllers/          # API logic and game functions
├── models/               # Models for Deck, Hand, Card
├── routes/               # Express API routes
├── app.js                # Main entry point of the application
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
8. Deployment
To deploy the backend, it's hosted on Vercel. You can push changes to the main branch, and it will automatically trigger a new deployment.

Deployed backend: https://5-card-draw.vercel.app/
