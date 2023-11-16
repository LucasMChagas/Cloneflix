import  express  from "express";
import { categoryController } from "./controllers/categoryController";
import { moviesController } from "./controllers/moviesController";

const router = express.Router();

router.get("/categories", categoryController.index)
router.get("/categories/:id", categoryController.show)

router.get("/movies/featured", moviesController.featured)
router.get('/movies/:id', moviesController.show)


export {router};
