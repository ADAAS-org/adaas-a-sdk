import { A_SDK_TYPES__User_APIEntity, A_SDK_TYPES__User_JSONEntity } from "./types/A_SDK_User.types";

export class A_SDK_User {

    id?: number
    identity!: string;
    createdAt?: Date;
    updatedAt?: Date;


    constructor(identity: string | A_SDK_TYPES__User_APIEntity) {
        this.identifyInitializer(identity);
    }


    protected identifyInitializer(identity: string | A_SDK_TYPES__User_APIEntity) {
        if (typeof identity === 'string') {
            this.identity = identity;
        } else {
            this.fromDB(identity);
        }
    }


    


    private fromDB(dbEntity: A_SDK_TYPES__User_APIEntity) {
        this.id = dbEntity.id;
        this.identity = dbEntity.identity;

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