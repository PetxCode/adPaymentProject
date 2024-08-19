import { connect } from "mongoose";
const DB = "mongodb://127.0.0.1:27017/adDB";

export const dbConfig = async () => {
  try {
    await connect(DB).then(() => {
      console.clear();
      console.log("DB connected 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }
};
