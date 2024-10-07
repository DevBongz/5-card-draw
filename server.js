const express = require('express');
const cors = require('cors'); 
const gameRoutes = require('./routes/gameRoutes');

const app = express();


app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000',
    'https://5-card-draw-frontend.vercel.app' ],
    credentials: true 
  }));

app.use('/api/game', gameRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
