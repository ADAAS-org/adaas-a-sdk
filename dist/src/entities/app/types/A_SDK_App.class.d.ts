export type A_SDK_TYPES__App_APIEntity = {
    id: number;
    name: string;
    description?: string;
    identity: string;
    created_at: Date;
    updated_at: Date;
};
export type A_SDK_TYPES__App_JSONEntity = {
    name: string;
    description?: string;
    identity: string;
    createdAt: string;
    updatedAt: string;
};
export declare enum A_SDK_TYPES__APP_STATUSES {
    ACTIVE = "ACTIVE",
    INVITED = "INVITED",
    TERMINATED = "TERMINATED"
}
