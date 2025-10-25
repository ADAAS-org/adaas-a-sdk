import { A_Error } from "@adaas/a-concept";


export class A_SDK_UserError extends A_Error{


    static readonly ValidationError = 'A-SDK User Validation Error';


    static readonly LoadError = 'A-SDK User Load Error';
}