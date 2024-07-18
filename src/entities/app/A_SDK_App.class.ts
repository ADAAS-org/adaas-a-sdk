import { A_AUTH_Authenticator } from "@adaas/a-auth";
import { A_SDK_TYPES__App_APIEntity, A_SDK_TYPES__App_JSONEntity } from "./types/A_SDK_App.class";
import { A_Entity, A_SDK_CommonHelper } from "@adaas/a-sdk-types";

export class A_SDK_App extends A_Entity<
    A_SDK_TYPES__App_JSONEntity
> {
    name!: string;
    description?: string;

    createdAt?: Date;
    updatedAt?: Date;


    constructor(aseidOrEntity: string | A_SDK_TYPES__App_JSONEntity | A_SDK_TYPES__App_APIEntity) {

        super(aseidOrEntity);

        this.identifyInitializer(aseidOrEntity);
    }


    protected identifyInitializer(aseidOrEntity: string | A_SDK_TYPES__App_APIEntity | A_SDK_TYPES__App_JSONEntity | undefined) {

        switch (true) {
            case typeof aseidOrEntity === 'string':
                this.aseid = aseidOrEntity as string;
                break;

            case typeof aseidOrEntity === 'object' && !!(aseidOrEntity as A_SDK_TYPES__App_APIEntity).aseid:
                this.fromDB(aseidOrEntity as A_SDK_TYPES__App_APIEntity);
                break;

            case typeof aseidOrEntity === 'object' && !(aseidOrEntity as A_SDK_TYPES__App_APIEntity).aseid:
                this.fromJSON(aseidOrEntity as A_SDK_TYPES__App_JSONEntity);
                break;

            default:
                return;
        }
    }


    private fromDB(dbEntity: A_SDK_TYPES__App_APIEntity) {
        this.aseid = dbEntity.aseid;
        this.name = dbEntity.name;
        this.description = dbEntity.description;

        this.createdAt = new Date(dbEntity.created_at);
        this.updatedAt = new Date(dbEntity.updated_at);
    }


    private fromJSON(serialized: A_SDK_TYPES__App_JSONEntity) {
        this.aseid = serialized.aseid;
        this.name = serialized.name;
        this.description = serialized.description;

        this.createdAt = new Date(serialized.createdAt);
        this.updatedAt = new Date(serialized.updatedAt);
    }


    toJSON(): A_SDK_TYPES__App_JSONEntity {
        return {
            aseid: this.aseid,
            scope: this.scope,
            namespace: this.namespace,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt!.toISOString(),
            updatedAt: this.updatedAt!.toISOString()
        }
    }
}