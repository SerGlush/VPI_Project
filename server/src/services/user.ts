import { getUser } from '../repository/user';
import { Route } from '../types/index'

export const getUserService: Route = async (req, res, next) => {
  try {
    res.status(200).json( await getUser(req.auth!.key) )
  } catch (error) {
    next(error)
  }
}