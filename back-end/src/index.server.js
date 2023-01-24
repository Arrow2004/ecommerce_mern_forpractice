const express  = require('express');
const app = express();
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

//get routes
const authRoutes = require('./routes/auth')
const authAdminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart')
//mongoose connection
mongoose.connect('mongodb+srv://root:'+process.env.Mongo_Pass+'@cluster0.ufftb.mongodb.net/mern-ecommerse?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Database connect')
  }).catch(e=>{
    console.log(e)
  });
app.use(express.json());
app.use ('/api/admin',authAdminRoutes);
app.use ('/api',authRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`)
})