import { A_Entity, A_TYPES__Entity_JSON } from "@adaas/a-concept";
import { A_Error, ASEID } from "@adaas/a-utils";
import { A_SDK_TYPES__BaseEntity_DB, A_SDK_TYPES__BaseEntity_Serialized } from "./A_SDK_Base.types";




export class A_SDK_BaseEntity<
    _ConstructorType extends Record<string, any> = Record<string, any>,
    _SerializedType extends A_SDK_TYPES__BaseEntity_Serialized = A_SDK_TYPES__BaseEntity_Serialized,
// _DBEntity extends A_SDK_TYPES__BaseEntity_DB = A_SDK_TYPES__BaseEntity_DB
> extends A_Entity<_ConstructorType, _SerializedType> {

    createdAt!: Date;
    updatedAt!: Date;

    static get namespace(): string {
        return 'a-sdk';
    }

    static get scope(): string {
        return 'core';
    }


    get id(): number {
        return Number(this.aseid.id);
    }


    protected getInitializer(props: string | _ConstructorType | _SerializedType | ASEID): (props: any) => void {
        // if (typeof props === 'object' && 'id' in props && props.id)
        //     return this.fromDB
        // else
        return super.getInitializer(props);
    }



    fromNew(newEntity: _ConstructorType | _SerializedType): void {
        this.aseid = new ASEID({
            namespace: (this.constructor as typeof A_SDK_BaseEntity).namespace,
            scope: (this.constructor as typeof A_SDK_BaseEntity).scope,
            entity: (this.constructor as typeof A_SDK_BaseEntity).entity,
            id: 0
        });

        this.createdAt = new Date();
        this.updatedAt = new Date();
    }


    // fromDB(dbEntity: _DBEntity): void {
    //     this.aseid = new ASEID({
    //         namespace: 'adaas',
    //         scope: 'core',
    //         entity: (this.constructor as typeof A_SDK_BaseEntity).entity,
    //         id: dbEntity.id
    //     });

    //     this.createdAt = new Date(dbEntity.created_at);
    //     this.updatedAt = new Date(dbEntity.updated_at);
    // }

    fromJSON(serialized: _SerializedType): void {
        this.aseid = new ASEID(serialized.aseid);

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