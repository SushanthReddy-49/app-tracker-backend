import dotenv from "dotenv";
import { mongoose } from "mongoose";

dotenv.config();

const uri = process.env.MONGODB_URI;

export async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit if connection fails
  }
}

export default connectToDatabase;
