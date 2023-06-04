import { NextFunction, Request, Response } from "express-serve-static-core";
import { categorizedFromDB, getFantasyBookToDB, getSciByRoliToDB, stringToIntFromToDB } from "./book.service";


export const getFantasyBook = async (req: Request, res: Response, next: NextFunction) => {

    const result = await getFantasyBookToDB();
    res.status(200).json({
        status: "success",
        data: result
    })
}

export const getSciByRoli = async (req: Request, res: Response) => {
    const result = await getSciByRoliToDB();
    res.status(200).json({
        status: "SUCCESS",
        data: result
    })
}
export const categorized = async (req: Request, res: Response) => {
    const result = await categorizedFromDB();
    res.status(200).json({
        status: "SUCCESS",
        data: result
    })
}
export const stringToInt = async (req: Request, res: Response) => {
    const result = await stringToIntFromToDB();
    res.status(200).json({
        status: "SUCCESS",
        data: result
    })
}
