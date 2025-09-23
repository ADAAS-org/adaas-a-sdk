import { A_TYPES__Entity_JSON } from "@adaas/a-concept"
import { A_SDK_TYPES__BaseEntity_Serialized } from "../base/A_SDK_Base.types"

export type A_SDK_TYPES__App_Constructor = {
    name: string,
    description?: string,
}


export type A_SDK_TYPES__App_Serialized = {
    aseid: string,
    name: string,
    description?: string,
    scope: string,
    namespace: string,
} & A_SDK_TYPES__BaseEntity_Serialized


// ==================APP STATUSES===================
export enum A_SDK_TYPES__APP_STATUSES {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}