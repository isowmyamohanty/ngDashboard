const verifyUserNameAndPassword: string = '/api/security/authenticateAndAuthorize';
const verifyUserNameAndToken: string = '/api/security/authorize';

export class RestEndpointProvider {
    public static getEndpointForUserNameAndPasswordVerification(): string {
        return verifyUserNameAndPassword;
    }
    public static getEndpointForUserNameAndTokenVerification(): string {
        return verifyUserNameAndToken;
    }
}