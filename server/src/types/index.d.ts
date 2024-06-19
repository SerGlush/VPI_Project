import { Request, Response, NextFunction } from 'express'

export type Route = (req: Request, res: Response, next: NextFunction) => void

declare global {
    namespace Express {
        export interface Request {
            auth?:  { key: number },
        }
    }
}