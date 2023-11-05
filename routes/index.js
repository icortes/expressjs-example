import express from 'express';
import homepage from './homepage.js';

const pages = express();

pages.use('/home', homepage);

export default pages;
