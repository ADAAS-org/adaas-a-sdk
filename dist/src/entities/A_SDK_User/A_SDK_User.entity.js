"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.A_SDK_User = void 0;
const a_concept_1 = require("@adaas/a-concept");
const A_SDK_Base_entity_1 = require("../A_SDK_BaseEntity/A_SDK_Base.entity");
const A_SDK_User_error_1 = require("./A_SDK_User.error");
class A_SDK_User extends A_SDK_Base_entity_1.A_SDK_BaseEntity {
    get id() {
        return Number(this.aseid.id);
    }
    /**
     * Verifies the user's password.
     *
     * @param password
     */
    verifyPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            // it's a good practice to check all mandatory fields here
            if (!this.email)
                throw new A_SDK_User_error_1.A_SDK_UserError(A_SDK_User_error_1.A_SDK_UserError.ValidationError, 'Email is required to verify password');
            // password should be checked in the controller, because it's not stored in the entity
            if (!password && !this.password)
                throw new A_SDK_User_error_1.A_SDK_UserError(A_SDK_User_error_1.A_SDK_UserError.ValidationError, 'Password is required');
            if (password)
                this.password = password;
        });
    }
    /**
     * Allows to sign out the user (e.g., invalidate tokens, clear sessions).
     */
    signOut() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Loads user data based on the provided email.
     */
    loadByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email && !this.email)
                throw new A_SDK_User_error_1.A_SDK_UserError(A_SDK_User_error_1.A_SDK_UserError.LoadError, 'Cannot load user: email not provided');
            if (email)
                this.email = email;
        });
    }
    /**
     * Loads user data based on available identifiers (id or email).
     */
    load(scope) {
        const _super = Object.create(null, {
            load: { get: () => super.load }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // select the way to load user based on available data
            switch (true) {
                case !!this.id:
                    return yield _super.load.call(this, scope);
                case !!this.email:
                    return yield this.loadByEmail();
                default:
                    throw new A_SDK_User_error_1.A_SDK_UserError(A_SDK_User_error_1.A_SDK_UserError.LoadError, 'Cannot load user: no identifier (id or email) provided');
            }
        });
    }
    /**
     * Initializes a new user entity from the provided constructor data.
     *
     * @param newEntity
     */
    fromNew(newEntity) {
        super.fromNew(newEntity);
        this.email = newEntity.email;
    }
    /**
     * Initializes the user entity from a database representation.
     *
     * @param serialized
     */
    fromJSON(serialized) {
        super.fromJSON(serialized);
        this.email = serialized.email;
    }
    /**
     * Serializes the user entity to a JSON representation.
     *
     * @returns
     */
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { email: this.email });
    }
}
exports.A_SDK_User = A_SDK_User;
__decorate([
    a_concept_1.A_Feature.Define({ invoke: true })
], A_SDK_User.prototype, "verifyPassword", null);
__decorate([
    a_concept_1.A_Feature.Define({ invoke: true })
], A_SDK_User.prototype, "signOut", null);
__decorate([
    a_concept_1.A_Feature.Define({ invoke: true })
], A_SDK_User.prototype, "loadByEmail", null);
__decorate([
    a_concept_1.A_Feature.Define({ invoke: false })
], A_SDK_User.prototype, "load", null);
//# sourceMappingURL=A_SDK_User.entity.js.map