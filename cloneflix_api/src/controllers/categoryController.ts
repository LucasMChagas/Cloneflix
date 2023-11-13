import { Request, Response } from "express";
import { getPaginationParams } from '../helpers/getPaginationParams'
import { categoryService } from '../services/categoryService'


export const categoryController = {
    index: async (req: Request, res: Response) => {

        const [page, perPage] = getPaginationParams(req.query)

        try {
            const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

            return res.json(paginatedCategories)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

}



