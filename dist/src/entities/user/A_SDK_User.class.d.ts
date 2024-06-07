import { A_SDK_TYPES__User_APIEntity } from "./types/A_SDK_User.types";
export declare class A_SDK_User {
    id?: number;
    identity: string;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(identity: string | A_SDK_TYPES__User_APIEntity);
    protected identifyInitializer(identity: string | A_SDK_TYPES__User_APIEntity): void;
    private fromDB;
}
