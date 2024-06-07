import { A_SDK_TYPES__App_APIEntity, A_SDK_TYPES__App_JSONEntity } from "./types/A_SDK_App.class";
export declare class A_SDK_App {
    id?: number;
    identity: string;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(identity?: string | A_SDK_TYPES__App_APIEntity | A_SDK_TYPES__App_JSONEntity);
    protected identifyInitializer(identity: string | A_SDK_TYPES__App_APIEntity | A_SDK_TYPES__App_JSONEntity | undefined): void;
    private fromDB;
    private fromJSON;
    getSSOUrl(redirectURL: string): Promise<string>;
    toJSON(): A_SDK_TYPES__App_JSONEntity;
}
