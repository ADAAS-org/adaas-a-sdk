"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_UserError = void 0;
const a_concept_1 = require("@adaas/a-concept");
class A_SDK_UserError extends a_concept_1.A_Error {
}
exports.A_SDK_UserError = A_SDK_UserError;
A_SDK_UserError.ValidationError = 'A-SDK User Validation Error';
A_SDK_UserError.LoadError = 'A-SDK User Load Error';
//# sourceMappingURL=A_SDK_User.error.js.map