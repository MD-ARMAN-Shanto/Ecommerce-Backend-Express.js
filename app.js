/* ***Node js Ecommerce Site
 *** Md. Arman Shanto
 *** Date: 06.12.2020 */

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');
const cors = require('cors');
const erorrValidator= require('express-validator');
// HTTP request logger middlewar.(when any user request anything first show in the console)
const morgan = require('morgan'); 
// Parse cookie header and populate req.cookies. middleware
const cookieParser = require('cookie-parser'); 
// Parse HTTP request body 
const bodyParser = require('body-parser'); 


// module scafolding
const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'));


// mongoose.connection.on('error', (err) => {
//   console.log(`DB connection error: ${err.message}`);
// });

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(erorrValidator());
app.use(cors());


// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);

// Port Declaretion
const port = process.env.PORT || 8080;

// Port Invokation
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
