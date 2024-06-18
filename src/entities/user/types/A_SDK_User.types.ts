export type A_SDK_TYPES__User_APIEntity = {
    id: number,
    aseid: string
    created_at: Date,
    updated_at: Date
}


export type A_SDK_TYPES__User_JSONEntity = {
    aseid: string,
    createdAt: string,
    updatedAt: string
}


export enum A_SDK_TYPES__USER_STATUSES {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}