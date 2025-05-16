require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3003;
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

app.get('/products/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/products', productRoutes); // Route for products

app.listen(PORT, () => {
  console.log(`Product service listening on port ${PORT}`);
});
