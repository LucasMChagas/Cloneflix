import { Movie } from "../models";

export const movieService = {
    findByIdWithEpisodes: async (id: string) => {
      const movieWithFiles = await Movie.findByPk(id, {
        attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']],
        include: {
          association: 'files',
          attributes: [
            'id',
            'name',
            'synopsis',            
            ['video_url', 'videoUrl'],
            ['seconds_long', 'secondsLong']
          ],
          order: [['id', 'ASC']],
          separate: true
        }
      })
  
      return movieWithFiles
    },
  }