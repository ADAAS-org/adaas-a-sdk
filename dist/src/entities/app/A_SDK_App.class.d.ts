import { A_SDK_TYPES__App_Constructor, A_SDK_TYPES__App_Serialized } from "./A_SDK_App.types";
import { A_SDK_BaseEntity } from "../base/A_SDK_Base.entity";
export declare class A_SDK_App extends A_SDK_BaseEntity<A_SDK_TYPES__App_Constructor, A_SDK_TYPES__App_Serialized> {
    name: string;
    description?: string;
    fromJSON(serialized: A_SDK_TYPES__App_Serialized): void;
    toJSON(): A_SDK_TYPES__App_Serialized;
}
