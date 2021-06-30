import mongoose from "mongoose";

const dbConnection = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((result) => console.log("connected"))
    .catch((error) => console.log(error));
};

export { dbConnection };
