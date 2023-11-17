import { Op } from "sequelize";
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

  getTopTenNewest: async () => {
    const movies = await Movie.findAll({
      limit: 10,
      order: [['created_at', 'DESC']]
    })

    return movies
  },

  findByName: async (name: string, page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await Movie.findAndCountAll({
      attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']],
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      limit: perPage,
      offset
    })

    return {
      movies: rows,
      page,
      perPage,
      total: count
    }
  }
}