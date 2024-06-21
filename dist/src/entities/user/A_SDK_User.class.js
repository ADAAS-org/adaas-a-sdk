"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_User = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
class A_SDK_User extends a_sdk_types_1.A_Entity {
    get id() {
        const { id } = a_sdk_types_1.A_SDK_CommonHelper.parseASEID(this.aseid);
        const [shard, targetId] = id.split('--');
        return shard ? parseInt(targetId) : parseInt(id);
    }
    get shard() {
        const { id } = a_sdk_types_1.A_SDK_CommonHelper.parseASEID(this.aseid);
        const [shard] = id.split('--');
        return shard ? shard : undefined;
    }
    constructor(aseidOrEntity) {
        super(typeof aseidOrEntity === 'string' ? aseidOrEntity : aseidOrEntity.aseid);
        this.identifyInitializer(aseidOrEntity);
    }
    identifyInitializer(aseidOrEntity) {
        if (typeof aseidOrEntity === 'string') {
            const aseid = aseidOrEntity;
            this.aseid = aseid;
        }
        else {
            const entity = aseidOrEntity;
            this.fromDB(entity);
        }
    }
    fromDB(dbEntity) {
        this.aseid = dbEntity.aseid;
        if (dbEntity.created_at)
            this.createdAt = new Date(dbEntity.created_at);
        if (dbEntity.updated_at)
            this.updatedAt = new Date(dbEntity.updated_at);
    }
}
exports.A_SDK_User = A_SDK_User;
//# sourceMappingURL=A_SDK_User.class.js.map