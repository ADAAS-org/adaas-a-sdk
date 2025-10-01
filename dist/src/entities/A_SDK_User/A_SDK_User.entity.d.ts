import { A_Scope } from "@adaas/a-concept";
import { A_SDK_BaseEntity } from "../A_SDK_BaseEntity/A_SDK_Base.entity";
import { A_SDK_TYPES__User_Constructor, A_SDK_TYPES__User_Serialized } from "./A_SDK_User.types";
export declare class A_SDK_User extends A_SDK_BaseEntity<A_SDK_TYPES__User_Constructor, A_SDK_TYPES__User_Serialized> {
    email: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
    get id(): number;
    /**
     * Verifies the user's password.
     *
     * @param password
     */
    verifyPassword(password?: string): Promise<void>;
    /**
     * Allows to sign out the user (e.g., invalidate tokens, clear sessions).
     */
    signOut(): Promise<void>;
    /**
     * Loads user data based on the provided email.
     */
    loadByEmail(email?: string): Promise<void>;
    /**
     * Loads user data based on available identifiers (id or email).
     */
    load(scope?: A_Scope): Promise<any>;
    /**
     * Initializes a new user entity from the provided constructor data.
     *
     * @param newEntity
     */
    fromNew(newEntity: A_SDK_TYPES__User_Constructor): void;
    /**
     * Initializes the user entity from a database representation.
     *
     * @param serialized
     */
    fromJSON(serialized: A_SDK_TYPES__User_Serialized): void;
    /**
     * Serializes the user entity to a JSON representation.
     *
     * @returns
     */
    toJSON(): A_SDK_TYPES__User_Serialized;
}
