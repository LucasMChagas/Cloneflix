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
      }
}