
import { Router } from "express"
import { portfolioController } from "../Controllers/portfolio.controller.js";
const router = Router();

router.route('/portfolio')
    .get(portfolioController.getGalleryImages)


export default router;