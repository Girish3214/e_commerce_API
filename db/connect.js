import mongoose from "mongoose";

const connectDB = async () => {
  // mongoose.set("useCreateIndex", true);
  mongoose.set("strictQuery", false);
  try {
    const URL = process.env.MONGO_URL;
    const conn = await mongoose.connect(URL, {
      dbName: "E_COMMERCE",
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB", conn.connection.host);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
