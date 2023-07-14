const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

//* env variable
const sequelize = require('./config/connection');

// Set up static folder
app.use(express.static(path.join(__dirname, "app/public")));

// Set up body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up session
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Import routes
const indexRoutes = require('./app/routes/index');
const authRoutes = require('./app/routes/authRoutes');
const fitnessRoutes = require('./app/routes/fitnessRoutes');

// Use routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/fitness', fitnessRoutes);

// Start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });
