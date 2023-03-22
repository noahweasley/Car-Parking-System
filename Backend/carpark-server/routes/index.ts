import getAllparks from '../controller/getAllparks.js';
import getAlluserss from '../controller/getAllusers.js';
import getpark from '../controller/getPark.js';
import bookpark from '../controller/bookpark.js'
import {Router} from 'express';

const router = Router()

router.get('/car-parks',getAllparks);
router.get('/users',getAllusers);
router.get('/car-park',getpark);
router.get('/:available',getAllparks);
router.patch('/book-park',bookpark);

export default router;
