import express from "express";

import scrapeController from "../controllers/scrape_controller";

const router = express.Router();

router.post("/api/scrape/url/", scrapeController.scrapeURL);

export default router;
