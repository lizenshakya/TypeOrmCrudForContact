import { Router } from 'express';

import contact from '../controller/contact';

const router = Router();

router.use('/contact', contact);

export default router;
