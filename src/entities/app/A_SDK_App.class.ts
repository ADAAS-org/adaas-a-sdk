import { A_AUTH_Authenticator } from "@adaas/adaas-a-auth";
import { A_SDK_TYPES__App_APIEntity, A_SDK_TYPES__App_JSONEntity } from "./types/A_SDK_App.class";

export class A_SDK_App {
    id?: number
    identity!: string;

    name!: string;
    description?: string;

    createdAt?: Date;
    updatedAt?: Date;


    constructor(identity?: string | A_SDK_TYPES__App_APIEntity | A_SDK_TYPES__App_JSONEntity) {
        this.identifyInitializer(identity);
    }


    protected identifyInitializer(identity: string | A_SDK_TYPES__App_APIEntity | A_SDK_TYPES__App_JSONEntity | undefined) {

        switch (true) {
            case typeof identity === 'string':
                this.identity = identity as string;
                break;

            case typeof identity === 'object' && !!(identity as A_SDK_TYPES__App_APIEntity).id:
                this.fromDB(identity as A_SDK_TYPES__App_APIEntity);
                break;

            case typeof identity === 'object' && !(identity as A_SDK_TYPES__App_APIEntity).id:
                this.fromJSON(identity as A_SDK_TYPES__App_JSONEntity);
                break;

            default:
                return;
        }
    }


    // async load(redirectURL: string) {
    // }



    private fromDB(dbEntity: A_SDK_TYPES__App_APIEntity) {
        this.id = dbEntity.id;
        this.identity = dbEntity.identity;
        this.name = dbEntity.name;
        this.description = dbEntity.description;

        this.createdAt = new Date(dbEntity.created_at);
        this.updatedAt = new Date(dbEntity.updated_at);

    }


    private fromJSON(serialized: A_SDK_TYPES__App_JSONEntity) {
        this.identity = serialized.identity;
        this.name = serialized.name;
        this.description = serialized.description;

        this.createdAt = new Date(serialized.createdAt);
        this.updatedAt = new Date(serialized.updatedAt);
    }


    async getSSOUrl(redirectURL: string) {
        return await A_AUTH_Authenticator.getSSOUrl(redirectURL);
    }


    toJSON(): A_SDK_TYPES__App_JSONEntity {
        return {
            identity: this.identity,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt!.toISOString(),
            updatedAt: this.updatedAt!.toISOString()
        }
    }
}