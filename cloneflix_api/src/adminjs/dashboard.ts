import AdminJs, { PageHandler } from 'adminjs'
import { Category, Movie, MovieFile, User } from '../models'

export const dashboardOptions: {
  handler?: PageHandler
  component?: string
} = {
  component: AdminJs.bundle('../adminjs/components/Dashboard'),
  handler: async (req, res, context) => {
    const movies = await Movie.count()
    const moviesFiles = await MovieFile.count()
    const category = await Category.count()
    const standardUsers = await User.count({ where: { role: 'user' } })

    res.json({
      'filmes': movies,
      'Arquivos de Filmes': moviesFiles,
      'Categorias': category,
      'Usuários Padrão': standardUsers
    })
  },
}