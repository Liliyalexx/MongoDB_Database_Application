// import {MongoClient} from 'mongodb'
// import dotenv from 'dotenv'
// dotenv.config()
// const client = new MongoClient(process.env.ATLAS_URI)
// let conn
//     try {
//         conn = await client.connect()
//     } catch (error) {
//         console.log(error);
//     }
// const mongoose = require('mongoose')
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;