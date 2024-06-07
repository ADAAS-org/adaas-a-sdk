"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_SDK_App = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_SDK_App {
    constructor(identity) {
        this.identifyInitializer(identity);
    }
    identifyInitializer(identity) {
        switch (true) {
            case typeof identity === 'string':
                this.identity = identity;
                break;
            case typeof identity === 'object' && !!identity.id:
                this.fromDB(identity);
                break;
            case typeof identity === 'object' && !identity.id:
                this.fromJSON(identity);
                break;
            default:
                return;
        }
    }
    // async load(redirectURL: string) {
    // }
    fromDB(dbEntity) {
        this.id = dbEntity.id;
        this.identity = dbEntity.identity;
        this.name = dbEntity.name;
        this.description = dbEntity.description;
        this.createdAt = new Date(dbEntity.created_at);
        this.updatedAt = new Date(dbEntity.updated_at);
    }
    fromJSON(serialized) {
        this.identity = serialized.identity;
        this.name = serialized.name;
        this.description = serialized.description;
        this.createdAt = new Date(serialized.createdAt);
        this.updatedAt = new Date(serialized.updatedAt);
    }
    getSSOUrl(redirectURL) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield a_auth_1.A_AUTH_Authenticator.getSSOUrl(redirectURL);
        });
    }
    toJSON() {
        return {
            identity: this.identity,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString()
        };
    }
}
exports.A_SDK_App = A_SDK_App;
//# sourceMappingURL=A_SDK_App.class.js.map