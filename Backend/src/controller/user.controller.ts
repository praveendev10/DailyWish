//import User from "../models/user.model";
import { userService, userExistService } from "../services/user.services";
import { Request, Response } from "express";
export const createUser = async (req: Request, res: Response) => {
  try {
    
    const user = await userService(req.body);
    
    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeUser = async (req: Request, res: Response) => {
  try {
    //const { name, email, password } = req.body;
    await userExistService(req.body);

    res.status(201).json({
      success: true,
      message: "User Remove Successfully",
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
