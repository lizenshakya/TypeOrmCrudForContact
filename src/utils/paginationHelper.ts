import { Request } from "express";

export const paginationInfo = (req: Request) => {
    const { perPage, pageNumber } = req.query;
    const currentPage: number = parseInt(pageNumber as any) || 1;
    const datalimit: number = parseInt(perPage as any) || 20;
    return {
        take: datalimit,
        skip: datalimit * (currentPage - 1),
    }
}
