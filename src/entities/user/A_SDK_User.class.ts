import { A_Entity } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__User_APIEntity } from "./types/A_SDK_User.types";

export class A_SDK_User extends A_Entity<
    A_SDK_TYPES__User_APIEntity
> {

    createdAt?: Date;
    updatedAt?: Date;


    constructor(aseidOrEntity: string | A_SDK_TYPES__User_APIEntity) {
        super(typeof aseidOrEntity === 'string' ? aseidOrEntity : aseidOrEntity.aseid);

        this.identifyInitializer(aseidOrEntity);
    }


    protected identifyInitializer(aseidOrEntity: string | A_SDK_TYPES__User_APIEntity) {
        if (typeof aseidOrEntity === 'string') {
            const aseid = aseidOrEntity as string;

            this.aseid = aseid;
        } else {
            const entity = aseidOrEntity as A_SDK_TYPES__User_APIEntity;

            this.fromDB(entity);
        }
    }


    private fromDB(dbEntity: A_SDK_TYPES__User_APIEntity) {
        this.aseid = dbEntity.aseid;

        if (dbEntity.created_at)
            this.createdAt = new Date(dbEntity.created_at);
        if (dbEntity.updated_at)
            this.updatedAt = new Date(dbEntity.updated_at);
    }

    // toJSON(): A_SDK_TYPES__User_APIEntity {
    //     return {
    //         id: this.id!,
    //         identity: this.identity,
    //     }
    // }
}