const mongoose = require("mongoose");
const conn = async () => {
  try {
    const response =  await mongoose.connect("mongodb+srv://TaskManager:TaskManager123@cluster0.uffwo.mongodb.net/TaskManager");
    if (response) {
      console.log("connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};
conn();
