import { Request, Response } from 'express'
import { movieService } from '../services/movieService'

export const moviesController = {
    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const movie = await movieService.findByIdWithEpisodes(id)
            return res.json(movie)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }

    }
}