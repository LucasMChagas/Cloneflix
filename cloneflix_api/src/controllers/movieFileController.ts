import { Request, Response } from 'express'
import { movieFileService } from '../services/movieFileService'

export const movieFileController = {  
  stream: async (req: Request, res: Response) => {
    const { videoUrl } = req.query
    const range = req.headers.range

    try {
      if (typeof videoUrl !== 'string') {
        throw new Error('videoUrl must be of type \'string\'');
      }

      movieFileService.streamEpisodeToResponse(res, videoUrl, range)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
}