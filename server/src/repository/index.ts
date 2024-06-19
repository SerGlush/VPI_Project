import mysql from 'mysql'
import { poolConfig } from '../config';

var dbPool  = mysql.createPool(poolConfig);

export function dbRequest<T>(query: string, callback: (results: any) => T): Promise<T> {
    return new Promise((resolve, reject) => {
        dbPool.query(query, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            try {
                resolve(callback(results));
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
