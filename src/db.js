import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/merndb");
    console.log(">>>>>>>>>Connected!<<<<<<<<<<");
  } catch (error) {
    console.error(error);
  }
};

await mongoose.connect("mongodb://127.0.0.1:27017/merndb", {
  useNewUrlParser: true,
});
