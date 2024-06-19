import { secretKey } from '../config';
import { loginUser } from '../repository/authorisation';
import { Route } from '../types/index'
import jwt from 'jsonwebtoken'

export const loginService: Route = async (req, res, next) => {
  try {
    let request = req.body;
    let key = await loginUser(request);

    let token = jwt.sign({key: key}, secretKey);
    
    res.status(200).json({ token })
  } catch (error) {
    next(error)
  }
}
