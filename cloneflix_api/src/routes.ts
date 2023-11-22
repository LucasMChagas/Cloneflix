import  express  from "express";
import { categoryController } from "./controllers/categoryController";
import { moviesController } from "./controllers/moviesController";
import { movieFileController } from "./controllers/movieFileController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get("/categories",ensureAuth, categoryController.index);
router.get("/categories/:id",ensureAuth, categoryController.show);

router.get("/movies/featured",ensureAuth, moviesController.featured);
router.get('/movies/newest', moviesController.newest);
router.get('/movies/search',ensureAuth, moviesController.search);
router.get('/movies/:id',ensureAuth, moviesController.show);

router.get('/movieFile/stream', movieFileController.stream);


export {router};
