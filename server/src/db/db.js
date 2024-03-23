import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connection = await mongoose
      .connect(
        `mongodb+srv://eshanpandey2002:8zX8LOz3QcWiivgC@cluster0.jcxa8t6.mongodb.net/`
      )
      .then(() => {
        console.log(`Connected to database`);
      });
  } catch (error) {
    console.log(error);
  }
};
export { connectDB };
