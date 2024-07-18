import { A_Entity, A_SDK_CommonHelper } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__ApiCredentials_APIEntity, A_SDK_TYPES__ApiCredentials_JSONEntity } from "./types/A_SDK_ApiCredentials.types";
import { A_SDK_User } from "../user/A_SDK_User.class";
import { A_SDK_App } from "../app/A_SDK_App.class";

export class A_SDK_ApiCredentials extends A_Entity<
    A_SDK_TYPES__ApiCredentials_APIEntity
> {

    createdAt?: Date;
    updatedAt?: Date;

    User?: A_SDK_User
    App?: A_SDK_App


    get id(): number {
        const { id } = A_SDK_CommonHelper.parseASEID(this.aseid);

        const [shard, targetId] = id.split('--');

        return shard ? parseInt(targetId) : parseInt(id);
    }

    get shard(): string | undefined {
        const { id } = A_SDK_CommonHelper.parseASEID(this.aseid);

        const [shard] = id.split('--');

        return shard ? shard : undefined;
    }


    constructor(aseidOrEntity: string | A_SDK_TYPES__ApiCredentials_APIEntity) {
        super(typeof aseidOrEntity === 'string' ? aseidOrEntity : aseidOrEntity.aseid);

        this.identifyInitializer(aseidOrEntity);
    }


    protected identifyInitializer(aseidOrEntity: string | A_SDK_TYPES__ApiCredentials_APIEntity | A_SDK_TYPES__ApiCredentials_JSONEntity | undefined) {

        switch (true) {
            case typeof aseidOrEntity === 'string':
                this.aseid = aseidOrEntity as string;
                break;

            case typeof aseidOrEntity === 'object' && !!(aseidOrEntity as A_SDK_TYPES__ApiCredentials_APIEntity).id:
                this.fromDB(aseidOrEntity as A_SDK_TYPES__ApiCredentials_APIEntity);
                break;

            case typeof aseidOrEntity === 'object' && !(aseidOrEntity as A_SDK_TYPES__ApiCredentials_APIEntity).id:
                this.fromJSON(aseidOrEntity as A_SDK_TYPES__ApiCredentials_JSONEntity);
                break;

            default:
                return;
        }
    }


    private fromDB(dbEntity: A_SDK_TYPES__ApiCredentials_APIEntity) {
        this.aseid = dbEntity.aseid;

        this.User = new A_SDK_User(dbEntity.User);
        this.App = dbEntity.App ? new A_SDK_App(dbEntity.App) : undefined;

        this.createdAt = new Date(dbEntity.created_at);
        this.updatedAt = new Date(dbEntity.updated_at);
    }


    private fromJSON(serialized: A_SDK_TYPES__ApiCredentials_JSONEntity) {
        this.aseid = serialized.aseid;

        this.createdAt = new Date(serialized.createdAt);
        this.updatedAt = new Date(serialized.updatedAt);
    }




    toJSON(): A_SDK_TYPES__ApiCredentials_JSONEntity {
        return {
            aseid: this.aseid,
            createdAt: this.createdAt ? this.createdAt.toISOString() : '',
            updatedAt: this.updatedAt ? this.updatedAt.toISOString() : ''

        }
    }
}