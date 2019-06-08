const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
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

app.listen(process.env.PORT || 4000);
