import { NextFunction,Response,Request } from "express";
import { HttpException } from "../interfaces/HttpException";
export const errorMiddleware = (err: HttpException, req: Request, res: Response, next: NextFunction) => {

    const status: number = err.status ?? 500
    const message: string = err.message?? 'Internal server Error'
    res.status(status).json({
        status, message
    })
}