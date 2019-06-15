const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const busboy = require("connect-busboy");
const fileUpload = require("express-fileupload");
const schema = require("./schema/schema");
const authRoutes = require("./routes/auth-routes");
const apiRoutes = require("./routes/api");
const mongoUri = require("./config/keys").mongodb.mongoURI;
// const session = require("express-session");
// const passport = require("passport");

const app = express();

mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
  console.log("connect to database");
});

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(fileUpload());
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.listen(process.env.PORT || 4000);
