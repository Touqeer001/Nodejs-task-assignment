import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/tasksRoutes.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//PORT....
const PORT =  8080;

//routes
app.use("/api/v1/task",taskRoutes);

app.listen(PORT, () =>
  console.log("Server is Running successfully on 8080 Port....")
);
