/* Import Express Middleware */
import { Request, Response, NextFunction } from "express";

/* Import Node-Fetch */
import axios from "axios";

/* Controller Functions */
//Add Item to Database
const scrapeURL = async (req: Request, res: Response, next: NextFunction) => {
  axios
    .get(req.body.url, {
      headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization",
        //User Agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      },
    })
    .then((response) => {
      return res.json({ response: response.data });
    })
    .catch((error) => {
      return res.json({ error: error.response.data });
    });
  //   try {
  //     const url = req.body.url;

  //     //Fetch URL
  //       const response = await axios.get(url);

  //       if ()

  //     return res.json({ response: response.data });
  //   } catch (error) {
  //     return res.json({ error: error});
  //   }
};

/* Export Controller Functions */
export default {
  scrapeURL,
};
