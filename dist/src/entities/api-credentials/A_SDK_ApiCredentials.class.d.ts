import { A_Entity } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__ApiCredentials_APIEntity, A_SDK_TYPES__ApiCredentials_JSONEntity } from "./types/A_SDK_ApiCredentials.types";
import { A_SDK_User } from "../user/A_SDK_User.class";
import { A_SDK_App } from "../app/A_SDK_App.class";
export declare class A_SDK_ApiCredentials extends A_Entity<A_SDK_TYPES__ApiCredentials_APIEntity> {
    createdAt?: Date;
    updatedAt?: Date;
    User?: A_SDK_User;
    App?: A_SDK_App;
    get id(): number;
    get shard(): string | undefined;
    constructor(aseidOrEntity: string | A_SDK_TYPES__ApiCredentials_APIEntity);
    protected identifyInitializer(aseidOrEntity: string | A_SDK_TYPES__ApiCredentials_APIEntity | A_SDK_TYPES__ApiCredentials_JSONEntity | undefined): void;
    private fromDB;
    private fromJSON;
    toJSON(): A_SDK_TYPES__ApiCredentials_JSONEntity;
}
