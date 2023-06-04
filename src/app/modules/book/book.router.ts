import express from 'express';
import { categorized, getFantasyBook, getSciByRoli, stringToInt } from './book.controller';
const router = express.Router();



router.get('/getFantasyBook', getFantasyBook);
router.get('/sci-fi', getSciByRoli);
router.get('/category-book', categorized);
router.get('/stringToInt',stringToInt );
export default router;