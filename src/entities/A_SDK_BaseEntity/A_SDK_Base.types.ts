import { A_TYPES__Entity_Serialized } from "@adaas/a-concept";

export type A_SDK_TYPES__BaseEntity_DB = {
    id: number,
    created_at: string,
    updated_at: string,
}


export type A_SDK_TYPES__BaseEntity_Serialized = {
    createdAt: string,
    updatedAt: string,
} & A_TYPES__Entity_Serialized
