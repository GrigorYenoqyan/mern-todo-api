const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const todosRoutes = require("./routes/todos-routes");
const productsRoutes = require("./routes/products-routes");
const usersRoutes = require("./routes/users-routes");
const graphqlRoutes = require("./graphql");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/products", productsRoutes);

app.use("/todos", todosRoutes);

app.use("/users", usersRoutes);

app.use("/graphql", graphqlRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zuo9uoe.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => app.listen(process.env.PORT || 5000))
  .catch((error) => console.log(error));
