"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_BaseEntity = void 0;
const a_concept_1 = require("@adaas/a-concept");
const a_utils_1 = require("@adaas/a-utils");
class A_SDK_BaseEntity extends a_concept_1.A_Entity {
    static get namespace() {
        return 'a-sdk';
    }
    static get scope() {
        return 'core';
    }
    get id() {
        return Number(this.aseid.id);
    }
    getInitializer(props) {
        // if (typeof props === 'object' && 'id' in props && props.id)
        //     return this.fromDB
        // else
        return super.getInitializer(props);
    }
    fromNew(newEntity) {
        this.aseid = new a_utils_1.ASEID({
            namespace: this.constructor.namespace,
            scope: this.constructor.scope,
            entity: this.constructor.entity,
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
    fromJSON(serialized) {
        this.aseid = new a_utils_1.ASEID(serialized.aseid);
        if (serialized.createdAt)
            this.createdAt = new Date(serialized.createdAt);
        if (serialized.updatedAt)
            this.updatedAt = new Date(serialized.updatedAt);
    }
    toJSON() {
        var _a, _b;
        return Object.assign(Object.assign({}, super.toJSON()), { createdAt: (_a = this.createdAt) === null || _a === void 0 ? void 0 : _a.toISOString(), updatedAt: (_b = this.updatedAt) === null || _b === void 0 ? void 0 : _b.toISOString() });
    }
}
exports.A_SDK_BaseEntity = A_SDK_BaseEntity;
//# sourceMappingURL=A_SDK_Base.entity.js.map