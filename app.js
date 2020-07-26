const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// import express handlebars
const hbs = require('express-handlebars');

const adminData = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express();

// initialize handlebars engine
app.engine('hbs', hbs({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs',
}));
// set handlebars engine
app.set('view engine', 'hbs');
app.set('views', 'views');

// request parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
