import { Category } from "../models";

export const categoryService = {
    findAllPaginated: async (page: number, perPage: number) => {
      const offset = (page - 1) * perPage
  
      const { count, rows } = await Category.findAndCountAll({
        attributes: ['id', 'name', 'position'],
        order: [['position', 'ASC']],
        limit: perPage,
        offset: offset
      })
  
      return {
        categories: rows,
        page: page,
        perPage: perPage,
        total: count
      }
    },

    findByIdWithMovies: async (id: string) => {
      const categoryWithMovies = await Category.findByPk(id, {
        attributes: ['id', 'name'],
        include: {
          association: 'movies',
          attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']],
        }
      })
  
      return categoryWithMovies
    }
  }