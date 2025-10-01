import { A_SDK_User } from "../A_SDK_User/A_SDK_User.entity";
import { A_SDK_App } from "../A_SDK_App/A_SDK_App.entity";
import { A_SDK_BaseEntity } from "../A_SDK_BaseEntity/A_SDK_Base.entity";
import { A_SDK_TYPES__ApiCredentials_Constructor, A_SDK_TYPES__ApiCredentials_Serialized } from "./A_SDK_ApiCredentials.types";

export class A_SDK_ApiCredentials extends A_SDK_BaseEntity<
    A_SDK_TYPES__ApiCredentials_Constructor,
    A_SDK_TYPES__ApiCredentials_Serialized
> {

    User!: A_SDK_User
    App?: A_SDK_App


    get id(): number {
        return parseInt(this.aseid.id);
    }

    get shard(): string | undefined {
        return this.aseid.shard;
    }



    fromJSON(serialized: A_SDK_TYPES__ApiCredentials_Serialized): void {
        super.fromJSON(serialized);

        this.User = new A_SDK_User(serialized.User);
        if (serialized.App)
            this.App = new A_SDK_App(serialized.App);
    }



    toJSON(): A_SDK_TYPES__ApiCredentials_Serialized {
        return {
            ...super.toJSON(),
            User: this.User.toJSON(),
            App: this.App ? this.App.toJSON() : undefined,
        }
    }
}