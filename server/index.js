// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HealthSync backend is running!');
});

const fs = require('fs');
const path = require('path');

app.get('/api/health', (req, res) => {
  const dataPath = path.join(__dirname, 'mockHealthData.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading health data:', err);
      return res.status(500).json({ error: 'Failed to load data' });
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
