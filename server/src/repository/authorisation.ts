import { dbRequest } from '.';
import { LoginData, RegistrationData } from '../../../shared'
import { BadCredentialsError } from '../errors/authorisation';

export function registerUser(data: RegistrationData): Promise<number> {
    return dbRequest<number>(
        `INSERT INTO ACCOUNT VALUES (NULL, '${data.username}', '${data.email}', '${data.password}')`,
        (results) => {
            return results.insertId;
        }
    )
}

export function loginUser(data: LoginData): Promise<number> {
    return dbRequest<number>(
        `SELECT account_key FROM ACCOUNT WHERE account_email = '${data.email}' AND account_password = '${data.password}'`,
        (results) => {
            if (results.length == 0) throw new BadCredentialsError();
            return results[0].account_key;
        }
    )
}