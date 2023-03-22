import getAllparks from '../controller/getAllparks.js';
import getpark from '../controller/getPark.js';
import bookpark from '../controller/bookpark.js'

const router = require('express').Router();

router.get('/car-parks',getAllparks);
router.get('/car-park',getpark);
router.get('/:available',getAllparks);
router.patch('/book-park',bookpark);

module.exports = router;
