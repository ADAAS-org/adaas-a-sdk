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
        switch (true) {
            case typeof aseidOrEntity === 'string':
                this.aseid = aseidOrEntity;
                break;
            case typeof aseidOrEntity === 'object' && !!aseidOrEntity.id:
                this.fromDB(aseidOrEntity);
                break;
            case typeof aseidOrEntity === 'object' && !aseidOrEntity.id:
                this.fromJSON(aseidOrEntity);
                break;
            default:
                return;
        }
    }
    fromDB(dbEntity) {
        this.aseid = dbEntity.aseid;
        this.createdAt = new Date(dbEntity.created_at);
        this.updatedAt = new Date(dbEntity.updated_at);
    }
    fromJSON(serialized) {
        this.aseid = serialized.aseid;
        this.createdAt = new Date(serialized.createdAt);
        this.updatedAt = new Date(serialized.updatedAt);
    }
    toJSON() {
        return {
            aseid: this.aseid,
            createdAt: this.createdAt ? this.createdAt.toISOString() : '',
            updatedAt: this.updatedAt ? this.updatedAt.toISOString() : ''
        };
    }
}
exports.A_SDK_User = A_SDK_User;
//# sourceMappingURL=A_SDK_User.class.js.map