import { Router } from 'express';
import fs from 'fs';

const homepage = Router();

homepage.get('/', (req, res) => {
  fs.readFile('./pages/index.html', 'utf8', (err, html) => {
    console.log('hello server');
    res.send(html);
  });
});

export default homepage;
