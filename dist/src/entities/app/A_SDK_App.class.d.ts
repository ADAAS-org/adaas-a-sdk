import { A_SDK_TYPES__App_APIEntity, A_SDK_TYPES__App_JSONEntity } from "./types/A_SDK_App.class";
import { A_Entity } from "@adaas/a-sdk-types";
export declare class A_SDK_App extends A_Entity<A_SDK_TYPES__App_JSONEntity> {
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(aseidOrEntity: string | A_SDK_TYPES__App_JSONEntity | A_SDK_TYPES__App_APIEntity);
    protected identifyInitializer(aseidOrEntity: string | A_SDK_TYPES__App_APIEntity | A_SDK_TYPES__App_JSONEntity | undefined): void;
    private fromDB;
    private fromJSON;
    toJSON(): A_SDK_TYPES__App_JSONEntity;
}
