require("dotenv").config(); // Load environment variables from .env
console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY); // Debugging


const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 3004;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB database successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB database', error);
});

app.use(express.json());

app.get('/users/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`User service listening on port ${PORT}`);
});
