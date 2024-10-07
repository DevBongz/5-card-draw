const express = require('express');
const cors = require('cors'); 
const gameRoutes = require('./routes/gameRoutes');

const app = express();


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000' 
  }));

app.use('/api/game', gameRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
