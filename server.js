// Dependencies
const path = require("path");
const express = require("express");
const sequelize = require("sequelize");
const session = require("express-session");
const routes = require("./routes");
const controllers = require("./controllers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.use(controllers);
// app.use(session);
app.use(sequelize)

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});