import { A_SDK_TYPES__IAEntity } from "@adaas/a-sdk-types"

export type A_SDK_TYPES__App_APIEntity = {
    aseid: string,
    name: string,
    description?: string,
    created_at: Date,
    updated_at: Date
} & A_SDK_TYPES__IAEntity


export type A_SDK_TYPES__App_JSONEntity = {
    aseid: string,
    name: string,
    description?: string,
    scope: string,
    namespace: string,
    createdAt: string,
    updatedAt: string
} & A_SDK_TYPES__IAEntity


// ==================APP STATUSES===================
export enum A_SDK_TYPES__APP_STATUSES {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}