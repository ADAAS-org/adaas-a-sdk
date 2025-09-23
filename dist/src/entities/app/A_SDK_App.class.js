"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_App = void 0;
const A_SDK_Base_entity_1 = require("../base/A_SDK_Base.entity");
class A_SDK_App extends A_SDK_Base_entity_1.A_SDK_BaseEntity {
    fromJSON(serialized) {
        super.fromJSON(serialized);
        this.name = serialized.name;
        this.description = serialized.description;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { scope: this.scope, namespace: this.namespace, name: this.name, description: this.description });
    }
}
exports.A_SDK_App = A_SDK_App;
//# sourceMappingURL=A_SDK_App.class.js.map