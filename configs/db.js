import mongoose from "mongoose";

const connectDB = async () => {
  let finalURI;

  finalURI = process.env.MONGO_URI_DEV;

  try {
    const conn = await mongoose.connect(finalURI, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
