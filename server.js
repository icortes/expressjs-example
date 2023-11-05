import express from 'express';
import path from 'path';
import pages from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', pages);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
