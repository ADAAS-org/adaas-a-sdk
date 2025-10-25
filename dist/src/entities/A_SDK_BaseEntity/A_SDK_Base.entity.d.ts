import { A_Entity } from "@adaas/a-concept";
import { A_SDK_TYPES__BaseEntity_Serialized } from "./A_SDK_Base.types";
export declare class A_SDK_BaseEntity<_ConstructorType extends Record<string, any> = Record<string, any>, _SerializedType extends A_SDK_TYPES__BaseEntity_Serialized = A_SDK_TYPES__BaseEntity_Serialized> extends A_Entity<_ConstructorType, _SerializedType> {
    createdAt: Date;
    updatedAt: Date;
    static get concept(): string;
    static get scope(): string;
    get id(): number;
    fromNew(newEntity: _ConstructorType): void;
    fromJSON(serialized: _SerializedType): void;
    toJSON(): _SerializedType;
}
