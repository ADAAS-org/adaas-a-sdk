import { A_SDK_ApiCredentials } from "../src/entities/A_SDK_ApiCredentials/A_SDK_ApiCredentials.entity";
import { A_SDK_App } from "../src/entities/A_SDK_App/A_SDK_App.entity";

jest.retryTimes(0);

describe('A-App tests', () => {

    it('Should allow to create A-APICredentials', async () => {
        const api = new A_SDK_ApiCredentials();

        expect(api).toBeInstanceOf(A_SDK_ApiCredentials);
        expect(api.aseid).toBeDefined();
        expect(api.aseid).not.toBeNull();
        expect(api.aseid.entity).toBe('a-sdk-api-credentials');
        expect(api.aseid.namespace).toBe('a-sdk');
        expect(api.aseid.scope).toBe('core');
    });

});