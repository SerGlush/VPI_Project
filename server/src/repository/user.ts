import { dbRequest } from ".";

export function getUser(user_id: number): Promise<{username: string}> {
    return dbRequest(
        `SELECT account_username FROM ACCOUNT WHERE account_key = '${user_id}'`,
        (results) => {
            if (results.length == 0) throw new Error();
            return {username: results[0].account_username};
        }
    )
}