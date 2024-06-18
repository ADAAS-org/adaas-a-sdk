import { A_Entity } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__User_APIEntity } from "./types/A_SDK_User.types";
export declare class A_SDK_User extends A_Entity<A_SDK_TYPES__User_APIEntity> {
    createdAt?: Date;
    updatedAt?: Date;
    constructor(aseidOrEntity: string | A_SDK_TYPES__User_APIEntity);
    protected identifyInitializer(aseidOrEntity: string | A_SDK_TYPES__User_APIEntity): void;
    private fromDB;
}
