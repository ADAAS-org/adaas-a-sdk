import { A_Entity } from "@adaas/a-concept";
import { ASEID } from "@adaas/a-utils";
import { A_SDK_TYPES__BaseEntity_Serialized } from "./A_SDK_Base.types";
export declare class A_SDK_BaseEntity<_ConstructorType extends Record<string, any> = Record<string, any>, _SerializedType extends A_SDK_TYPES__BaseEntity_Serialized = A_SDK_TYPES__BaseEntity_Serialized> extends A_Entity<_ConstructorType, _SerializedType> {
    createdAt: Date;
    updatedAt: Date;
    static get namespace(): string;
    static get scope(): string;
    get id(): number;
    protected getInitializer(props: string | _ConstructorType | _SerializedType | ASEID): (props: any) => void;
    fromNew(newEntity: _ConstructorType | _SerializedType): void;
    fromJSON(serialized: _SerializedType): void;
    toJSON(): _SerializedType;
}
