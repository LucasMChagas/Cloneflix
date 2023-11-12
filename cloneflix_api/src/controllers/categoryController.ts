import { Request, Response } from "express";
import { Category } from "../models";

export const categoryController = {
    index: async (req: Request, res: Response) => {
        try {
            const categories = await Category.findAll({
                attributes: ['id', 'name', 'position'],
                order: [['position', 'ASC']]
            });
            return res.status(200).json(categories);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },
    
}

