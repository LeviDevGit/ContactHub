import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    app.listen(9000, () => {
      console.log("Server is running at localhost:9000");
    });
  })
  .catch((err) => console.log(err));
