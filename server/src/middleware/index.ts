import { Route } from '../types'
import { Message } from '../../../shared'
import { ErrorRequestHandler } from 'express'
import { CodedError } from '../errors/authorisation'

export const codedErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof CodedError) {
        res.status(error.status).send({code: error.code});
        return
    }
  next(error)
}

export const unknownErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err)
    const status = err.status || 500
    const message = err.message || 'Something went wrong. Try again later'
    res.status(status).json({ message })
  }
