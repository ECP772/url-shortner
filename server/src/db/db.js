import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connection = await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log(`Connected to database`);
      });
  } catch (error) {
    console.log(error);
  }
};
export { connectDB };
