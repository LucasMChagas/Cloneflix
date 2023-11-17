import { Request, Response } from 'express'
import { movieService } from '../services/movieService'
import { getPaginationParams } from '../helpers/getPaginationParams'

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

    },

    featured: async (req: Request, res: Response) => {
        try {
            const featuredCourses = await movieService.getRandomFeaturedMovie();
            return res.json(featuredCourses)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    newest: async (req: Request, res: Response) => {
        try {
            const newestMovies = await movieService.getTopTenNewest()
            return res.json(newestMovies)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    search: async (req: Request, res: Response) => {
        const { name } = req.query
        const [page, perPage] = getPaginationParams(req.query)

        try {
            if (typeof name !== 'string') throw new Error('name param must be of type string');
            const movies = await movieService.findByName(name, page, perPage)
            return res.json(movies)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}