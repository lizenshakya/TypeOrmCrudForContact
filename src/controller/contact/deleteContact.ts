import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Contact } from "../../entity/Contact";
import { createSuccessMessage } from "../../utils/customSucess";
import { NotFoundError } from "../../utils/errors";

export const deleteContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const contactRepository = getRepository(Contact);
    const contactInfo = await contactRepository.findOne({ where: { id } });
    if (contactInfo) {
      await getRepository(Contact).delete(id);
      return createSuccessMessage(204, "", "", res);
    }
    throw new NotFoundError("Contact with id not found");
  } catch (err) {
    next(err);
  }
};
