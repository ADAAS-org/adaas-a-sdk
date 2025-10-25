import { A_SDK_TYPES__App_Serialized } from "../A_SDK_App/A_SDK_App.types"
import { A_SDK_TYPES__BaseEntity_Serialized } from "../A_SDK_BaseEntity/A_SDK_Base.types"
import { A_SDK_TYPES__User_Serialized } from "../A_SDK_User/A_SDK_User.types"

export type A_SDK_TYPES__ApiCredentials_Constructor = {
    aseid: string
}

export type A_SDK_TYPES__ApiCredentials_Serialized = {
    aseid: string,

    User: A_SDK_TYPES__User_Serialized,
    App?: A_SDK_TYPES__App_Serialized,

} & A_SDK_TYPES__BaseEntity_Serialized


export enum A_SDK_TYPES__USER_STATUSES {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}