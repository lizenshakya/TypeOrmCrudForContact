import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Contact } from '../../entity/Contact';
import { createSuccessMessage } from '../../utils/customSucess'

export const createContact = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phoneNumber, age } = req.body;
    const contactRepository = getRepository(Contact);
    try {
        const saveContact = await contactRepository.save({
            firstName, lastName, email, phoneNumber, age
        });
        return createSuccessMessage(201, 'Saved Successfully', saveContact, res);

    } catch (err) {
      return next(err);
    }
};
