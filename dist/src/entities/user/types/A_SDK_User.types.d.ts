export type A_SDK_TYPES__User_APIEntity = {
    id: number;
    identity: string;
    email: string;
    created_at: Date;
    updated_at: Date;
};
export type A_SDK_TYPES__User_JSONEntity = {
    identity: string;
    createdAt: string;
    updatedAt: string;
};
export declare enum A_SDK_TYPES__USER_STATUSES {
    ACTIVE = "ACTIVE",
    INVITED = "INVITED",
    TERMINATED = "TERMINATED"
}
export declare enum A_SDK_TYPES__USER_AUTHORIZED_DEVICE_STATUSES {
    ACTIVE = "ACTIVE",
    TERMINATED = "TERMINATED"
}
