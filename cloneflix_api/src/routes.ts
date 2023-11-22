import  express  from "express";
import { categoryController } from "./controllers/categoryController";
import { moviesController } from "./controllers/moviesController";
import { movieFileController } from "./controllers/movieFileController";
import { authController } from "./controllers/authController";

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.show);

router.get("/movies/featured", moviesController.featured);
router.get('/movies/newest', moviesController.newest);
router.get('/movies/search', moviesController.search);
router.get('/movies/:id', moviesController.show);

router.get('/movieFile/stream', movieFileController.stream);


export {router};
