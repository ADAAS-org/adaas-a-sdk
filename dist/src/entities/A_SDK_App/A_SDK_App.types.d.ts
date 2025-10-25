import { A_SDK_TYPES__BaseEntity_Serialized } from "../A_SDK_BaseEntity/A_SDK_Base.types";
export type A_SDK_TYPES__App_Constructor = {
    name: string;
    description?: string;
};
export type A_SDK_TYPES__App_Serialized = {
    aseid: string;
    name: string;
    description?: string;
    scope: string;
    concept: string;
} & A_SDK_TYPES__BaseEntity_Serialized;
export declare enum A_SDK_TYPES__APP_STATUSES {
    ACTIVE = "ACTIVE",
    INVITED = "INVITED",
    TERMINATED = "TERMINATED"
}
