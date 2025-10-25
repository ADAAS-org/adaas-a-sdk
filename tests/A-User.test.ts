import { A_SDK_User } from "../src/entities/A_SDK_User/A_SDK_User.entity";

jest.retryTimes(0);

describe('A-User tests', () => {

    it('Should allow to create A-user', async () => {
        const user = new A_SDK_User({
           email: 'test@test.com'
        });

        expect(user).toBeInstanceOf(A_SDK_User);
        expect(user.email).toBe('test@test.com');
        expect(user.aseid).toBeDefined();
        expect(user.aseid).not.toBeNull();
        expect(user.aseid.entity).toBe('a-sdk-user');
        expect(user.aseid.concept).toBe('a-sdk');
        expect(user.aseid.scope).toBe('core');
    });

});