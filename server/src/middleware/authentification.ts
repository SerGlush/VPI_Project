import jwt, { JsonWebTokenError, JwtPayload, NotBeforeError, TokenExpiredError } from 'jsonwebtoken'
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { secretKey } from '../config';

export const authentificationMiddleware: RequestHandler = (req, res, next) => {
    const authScheme = 'Bearer ';
    const authHeader = req.headers.authorization;
    if (authHeader === undefined || authHeader.length < authScheme.length) {
        res.status(StatusCodes.UNAUTHORIZED).send();
        return
    }
    const token = authHeader.substring(authScheme.length);
    let payload: any;
    try {
        payload = jwt.verify(token, secretKey) as JwtPayload
    } catch (error) {
        if(error instanceof NotBeforeError || error instanceof TokenExpiredError || error instanceof JsonWebTokenError) {
            res.status(StatusCodes.UNAUTHORIZED).send();
            return;
        }
    };
    req.auth = {key: payload!.key};
    next()
}