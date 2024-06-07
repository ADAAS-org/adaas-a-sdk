"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_User = void 0;
class A_SDK_User {
    constructor(identity) {
        this.identifyInitializer(identity);
    }
    identifyInitializer(identity) {
        if (typeof identity === 'string') {
            this.identity = identity;
        }
        else {
            this.fromDB(identity);
        }
    }
    fromDB(dbEntity) {
        this.id = dbEntity.id;
        this.identity = dbEntity.identity;
        if (dbEntity.created_at)
            this.createdAt = new Date(dbEntity.created_at);
        if (dbEntity.updated_at)
            this.updatedAt = new Date(dbEntity.updated_at);
    }
}
exports.A_SDK_User = A_SDK_User;
//# sourceMappingURL=A_SDK_User.class.js.map