import { A_SDK_TYPES__App_APIEntity } from "../../app/types/A_SDK_App.class"
import { A_SDK_TYPES__User_APIEntity } from "../../user/types/A_SDK_User.types"

export type A_SDK_TYPES__ApiCredentials_APIEntity = {
    id: number,
    aseid: string

    User: A_SDK_TYPES__User_APIEntity,
    App?: A_SDK_TYPES__App_APIEntity

    created_at: Date,
    updated_at: Date
}


export type A_SDK_TYPES__ApiCredentials_JSONEntity = {
    aseid: string,
    createdAt: string,
    updatedAt: string
}


export enum A_SDK_TYPES__USER_STATUSES {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}