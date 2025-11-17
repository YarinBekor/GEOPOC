const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { page: 'home' });
});

app.get('/about', (req, res) => {
  res.render('about', { page: 'about' });
});

app.get('/properties', (req, res) => {
  res.render('properties', { page: 'properties' });
});

app.get('/applications', (req, res) => {
  res.render('applications', { page: 'applications' });
});

app.get('/dynasty', (req, res) => {
  res.render('dynasty', { page: 'dynasty' });
});

app.get('/ceremonies', (req, res) => {
  res.render('ceremonies', { page: 'ceremonies' });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { page: 'gallery' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
