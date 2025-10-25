import { A_SDK_App } from "../src/entities/A_SDK_App/A_SDK_App.entity";

jest.retryTimes(0);

describe('A-App tests', () => {

    it('Should allow to create A-app', async () => {
        const app = new A_SDK_App({
            name: 'Test App',
            description: 'This is a test app'
        });

        expect(app).toBeInstanceOf(A_SDK_App);
        expect(app.name).toBe('Test App');
        expect(app.description).toBe('This is a test app');
        expect(app.aseid).toBeDefined();
        expect(app.aseid).not.toBeNull();
        expect(app.aseid.entity).toBe('a-sdk-app');
        expect(app.aseid.concept).toBe('a-sdk');
        expect(app.aseid.scope).toBe('core');
    });

});