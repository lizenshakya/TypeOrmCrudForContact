import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Contact } from "../../entity/Contact";
import { createSuccessMessage } from "../../utils/customSucess";
import { NotFoundError } from "../../utils/errors";

export const updateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, phoneNumber, age } = req.body;
    const { id } = req.params;
    const contactRepository = getRepository(Contact);
    const contactInfo = await contactRepository.findOne({ where: { id } });
    if (contactInfo) {
      await contactRepository.update(
        { id: Number(id) },
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          age,
        }
      );
      const updatedContactInfo = await contactRepository.findOne({ where: { id } });

      return createSuccessMessage(
        200,
        "Updated Successfully",
        updatedContactInfo,
        res
      );
    }
    throw new NotFoundError("Contact with id not found");
  } catch (err) {
    next(err);
  }
};
