import { A_Entity, ASEID } from "@adaas/a-concept";
import { A_SDK_TYPES__BaseEntity_Serialized } from "./A_SDK_Base.types";




export class A_SDK_BaseEntity<
    _ConstructorType extends Record<string, any> = Record<string, any>,
    _SerializedType extends A_SDK_TYPES__BaseEntity_Serialized = A_SDK_TYPES__BaseEntity_Serialized,
> extends A_Entity<_ConstructorType, _SerializedType> {

    createdAt!: Date;
    updatedAt!: Date;

    static get concept(): string {
        return 'a-sdk';
    }

    static get scope(): string {
        return 'core';
    }


    get id(): number {
        return Number(this.aseid.id);
    }

    fromNew(newEntity: _ConstructorType): void {
        super.fromNew(newEntity);

        this.createdAt = new Date();
        this.updatedAt = new Date();
    }


    fromJSON(serialized: _SerializedType): void {
        super.fromJSON(serialized);

        if (serialized.createdAt)
            this.createdAt = new Date(serialized.createdAt);
        if (serialized.updatedAt)
            this.updatedAt = new Date(serialized.updatedAt);
    }

    toJSON(): _SerializedType {
        return {
            ...super.toJSON(),
            createdAt: this.createdAt?.toISOString(),
            updatedAt: this.updatedAt?.toISOString(),
        }
    }
}