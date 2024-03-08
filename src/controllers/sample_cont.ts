/* Import Express Middleware */
import { Request, Response, NextFunction } from "express";

/* Controller Functions */
//Add Item to Database
const addItem = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "New item posted" });
};

//Delete All Items from Database
const deleteAllItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: "All items deleted" });
};

//Delete One Item from Database
const deleteOneItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: "Item deleted" });
};

//Get All Items from Database
const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Here are the items!" });
};

//Get One Item from Database
const getOneItem = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Here is the item!" });
};

//Update One Item in Database
const modifyItem = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Item modified" });
};
/* End Controller Functions */

/* Export Controller Functions */
export default {
  addItem,
  deleteAllItems,
  deleteOneItem,
  getAllItems,
  getOneItem,
  modifyItem,
};
