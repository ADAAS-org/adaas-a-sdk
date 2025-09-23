"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_ApiCredentials = void 0;
const A_SDK_User_class_1 = require("../user/A_SDK_User.class");
const A_SDK_App_class_1 = require("../app/A_SDK_App.class");
const A_SDK_Base_entity_1 = require("../base/A_SDK_Base.entity");
class A_SDK_ApiCredentials extends A_SDK_Base_entity_1.A_SDK_BaseEntity {
    get id() {
        return parseInt(this.aseid.id);
    }
    get shard() {
        return this.aseid.shard;
    }
    fromJSON(serialized) {
        super.fromJSON(serialized);
        this.User = new A_SDK_User_class_1.A_SDK_User(serialized.User);
        if (serialized.App)
            this.App = new A_SDK_App_class_1.A_SDK_App(serialized.App);
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { User: this.User.toJSON(), App: this.App ? this.App.toJSON() : undefined });
    }
}
exports.A_SDK_ApiCredentials = A_SDK_ApiCredentials;
//# sourceMappingURL=A_SDK_ApiCredentials.class.js.map