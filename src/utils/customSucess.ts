import { Response } from 'express';
interface PaginationInfo {
    take: number,
    skip: number
}

export const createSuccessMessage = (httpStatus: number, message: string, data: any = null, res: Response) => {
    return res.status(httpStatus).json({ message, data});
}

export const createSuccessPaginationMessage = (httpStatus: number, message: string, data: any = null, res: Response, paginationInfo: PaginationInfo) => {
    const { take, skip } = paginationInfo;
    const pageInfo = {
        count: data[1],
        dataLimit: take,
        pageNumber: skip + 1
    }
    return res.status(httpStatus).json({ message, data: data[0], pageInfo});
}