const express = require('express');
const session = require('express-session');
//* imports sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//* temporary exphbs import
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

//* temporary create handlebars instance
const hbs = exphbs.create({});

//* env variable
const sequelize = require('./config/connection');

// Set up static folder
app.use(express.static(path.join(__dirname, 'app/public')));

// Set up body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const oneDay = 24* 60 * 60 * 1000;

// Set up session
app.use(session({
  secret: 'your-secret-key',
  cookie: {
    maxAge: oneDay
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
}));

//*temporary code to set up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

//*Jedidiahs code, temporarily commented out
// Set up Handlebars as the view engine
// app.set('views', path.join(__dirname, 'app/views'));
// app.set('view engine', 'handlebars');

// const exphbs = require('express-handlebars');
// app.engine(
//   'handlebars',
//   exphbs({
//     defaultLayout: 'main',
//     layoutsDir: path.join(__dirname, 'app/views/layouts')
//   })
// );

//* imports the controller routes
app.use(require('./controllers'));

// Start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  }
)