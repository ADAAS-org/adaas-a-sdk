import { A_Feature, A_Scope } from "@adaas/a-concept";
import { A_SDK_BaseEntity } from "../base/A_SDK_Base.entity";
import { A_SDK_TYPES__User_Constructor, A_SDK_TYPES__User_Serialized } from "./A_SDK_User.types";
import { A_Error } from "@adaas/a-utils";



export class A_SDK_User extends A_SDK_BaseEntity<
    A_SDK_TYPES__User_Constructor,
    A_SDK_TYPES__User_Serialized
> {

    email!: string;
    password?: string;


    createdAt!: Date;
    updatedAt!: Date;

    get id(): number {
        return Number(this.aseid.id);
    }



    /**
     * Verifies the user's password.
     * 
     * @param password 
     */
    @A_Feature.Define({ invoke: true })
    async verifyPassword(password?: string) {
        // it's a good practice to check all mandatory fields here
        if (!this.email) throw new A_Error('Email is required');
        // password should be checked in the controller, because it's not stored in the entity
        if (!password && !this.password) throw new A_Error('Password is required');

        if (password)
            this.password = password;
    }


    /**
     * Allows to sign out the user (e.g., invalidate tokens, clear sessions).
     */
    @A_Feature.Define({ invoke: true })
    async signOut() { }

    /**
     * Loads user data based on the provided email.
     */
    @A_Feature.Define({ invoke: true })
    async loadByEmail(email?: string) {
        if (!email && !this.email) throw new A_Error('Email is required to load user');

        if (email)
            this.email = email;
    }



    /**
     * Loads user data based on available identifiers (id or email).
     */
    @A_Feature.Define({ invoke: false })
    async load(scope?: A_Scope): Promise<any> {
        // select the way to load user based on available data
        switch (true) {
            case !!this.id:
                return await super.load(scope);
            case !!this.email:
                return await this.loadByEmail();
            default:
                throw new A_Error('Cannot load user: no identifier provided');
        }
    }


    /**
     * Initializes a new user entity from the provided constructor data.
     * 
     * @param newEntity 
     */
    fromNew(newEntity: A_SDK_TYPES__User_Constructor): void {
        super.fromNew(newEntity);

        this.email = newEntity.email;
    }


    /**
     * Initializes the user entity from a database representation.
     * 
     * @param serialized 
     */
    fromJSON(serialized: A_SDK_TYPES__User_Serialized): void {
        super.fromJSON(serialized);

        this.email = serialized.email;
    }


    /**
     * Serializes the user entity to a JSON representation.
     * 
     * @returns 
     */
    toJSON(): A_SDK_TYPES__User_Serialized {
        return {
            ...super.toJSON(),
            email: this.email,
        }
    }
}