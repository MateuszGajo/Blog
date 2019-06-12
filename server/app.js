const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

const app = express();
const authRoutes = require("./routes/auth-routes");

const connect = mongoose.connect(
  `mongodb+srv://test:test123@cluster0-iog2r.mongodb.net/test?retryWrites=true&w=majority
`,
  { useNewUrlParser: true },
  () => {
    console.log("connect to database");
  }
);

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.use(bodyParser.json());
app.use("/auth", authRoutes);

app.listen(process.env.PORT || 4000);
