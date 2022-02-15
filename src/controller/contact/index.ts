import { Router } from 'express';

import { createContact } from './createContact';
import { deleteContact } from './deleteContact';
import { getContacts } from './getContacts'
import { updateContact } from './updateContact';

const router = Router();

router.get('/', getContacts);
router.post('/', createContact);
router.put('/:id', updateContact);
router.patch('/:id', deleteContact);

export default router;
