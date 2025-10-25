"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_BaseEntity = void 0;
const a_concept_1 = require("@adaas/a-concept");
class A_SDK_BaseEntity extends a_concept_1.A_Entity {
    static get concept() {
        return 'a-sdk';
    }
    static get scope() {
        return 'core';
    }
    get id() {
        return Number(this.aseid.id);
    }
    fromNew(newEntity) {
        super.fromNew(newEntity);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    fromJSON(serialized) {
        super.fromJSON(serialized);
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