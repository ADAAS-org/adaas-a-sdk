import { A_TYPES__Entity_JSON } from "@adaas/a-concept"
import { A_SDK_TYPES__BaseEntity_DB, A_SDK_TYPES__BaseEntity_Serialized } from "../A_SDK_BaseEntity/A_SDK_Base.types"

export type A_SDK_TYPES__User_DB = {
    id: number,
    email: string,
} & A_SDK_TYPES__BaseEntity_DB


export type A_SDK_TYPES__User_Serialized = {
    email: string,
} & A_SDK_TYPES__BaseEntity_Serialized


export type A_SDK_TYPES__User_Constructor = {
    email: string;
    password: string;
} | {
    email: string;
}


export type A_SDK_TYPES__User_Credentials = {
    email: string;
    password: string;
}



export enum A_SDK_TYPES__USER_STATUSES {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}