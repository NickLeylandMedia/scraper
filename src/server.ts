/*  Imports  */
//CORS
import cors from "cors";
//Express
import express from "express";
//DotENV
import dotenv from "dotenv";
//Database Import
import db from "./db/index";

/* API Routes */
//Route Imports
import scrapeRoutes from "./routes/scrape_route";

/* App Initialization */
const app = express();

/* ENV Initialization */
dotenv.config();

/* Env Variables */
const PORT = Number(process.env.PORT) || 3042;

/* Middleware Initialization */
//CORS
app.use(cors());

//Express JSON
app.use(express.json());

//Routes
app.use("/", scrapeRoutes);

//App Listener
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server initialized and running on port ${PORT}`);
});
