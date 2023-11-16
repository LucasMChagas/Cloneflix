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

    getRandomFeaturedMovie: async () => {
      const featuredMovie = await Movie.findAll({
        attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']],
        where: {
          featured: true
        }
      })
  
      const randomFeaturedMovies = featuredMovie.sort(() => 0.5 - Math.random())
  
      return randomFeaturedMovies.slice(0, 3)
    },
  }