import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Contact } from '../../entity/Contact';
import { createSuccessPaginationMessage } from '../../utils/customSucess'
import { paginationInfo } from '../../utils/paginationHelper'

export const getContacts = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepository = getRepository(Contact);
    const pagination = paginationInfo(req);
    try {
        const results = await contactRepository.findAndCount({
            ...pagination
        });
        return createSuccessPaginationMessage(200, '', results, res, pagination);
    } catch (err) {
      return next(err);
    }
};
