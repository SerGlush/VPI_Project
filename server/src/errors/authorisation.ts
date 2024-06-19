import { StatusCodes } from "http-status-codes";
import { ErrorCodes } from "../../../shared";

export class CodedError extends Error {
    code: ErrorCodes;
    status: StatusCodes;

    constructor(code: ErrorCodes, status: StatusCodes) {
        super();
        this.code = code;
        this.status = status;
    }
}

export class BadCredentialsError extends CodedError {
    constructor() {
        super('BAD_CREDENTIALS', StatusCodes.UNAUTHORIZED);
    }
}