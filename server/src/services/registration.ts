import { secretKey } from '../config';
import { registerUser } from '../repository/authorisation';
import { Route } from '../types/index'
import jwt from 'jsonwebtoken'

export const registrationService: Route = async (req, res, next) => {
  try {
    let request = req.body;
    let key = await registerUser(request);

    let token = jwt.sign({key: key}, secretKey);
    
    res.status(200).json({ token })
  } catch (error) {
    next(error)
  }
}
