"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_ServerError = void 0;
const axios_1 = require("axios");
const a_auth_1 = require("@adaas/a-auth");
class A_SDK_ServerError extends Error {
    constructor(params) {
        super((params === null || params === void 0 ? void 0 : params.message) || 'Oops... Something went wrong');
        this.serverCode = 500;
        this.identifyErrorType(params);
    }
    identifyErrorType(error) {
        var _a, _b, _c, _d;
        if (error.code &&
            error.description &&
            error.serverCode) {
            const target = error;
            this.message = target.message;
            this.code = target.code;
            this.description = target.description;
            this.serverCode = target.serverCode;
            this.originalError = target.originalError;
        }
        else if (error instanceof a_auth_1.A_AUTH_Error) {
            this.message = error.message;
            this.code = error.code;
            this.description = error.description;
            this.originalError = error;
        }
        else if (error instanceof Error) {
            this.message = error.message;
            this.code = 'ADAAS-DEFAULT-ERR-0000';
            this.description = 'If you see this error please let us know.';
            this.serverCode = 500;
            this.originalError = error;
        }
        else if (error instanceof axios_1.AxiosError) {
            this.message = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message) || error.message;
            this.code = ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data.code) || 'ADAAS-DEFAULT-ERR-0000';
            this.description = ((_c = error.response) === null || _c === void 0 ? void 0 : _c.data.description) || 'If you see this error please let us know.';
            this.serverCode = ((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) || 500;
            this.originalError = error.response;
        }
    }
    get compilingData() {
        return {
            message: this.message,
            code: this.code,
            description: this.description,
            serverCode: this.serverCode,
            originalError: this.originalError
        };
    }
    toJSON() {
        return this.compilingData;
    }
}
exports.A_SDK_ServerError = A_SDK_ServerError;
//# sourceMappingURL=A_SDK_ServerError.class.js.map