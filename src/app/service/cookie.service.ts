import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface CookieFields {
    UID: string,
    GUID: string,
    Authorization: string
}

const UID_START_INDEX: number = 4;
const UI_END_INDEX: number = 11;
const GUID_START_INDEX: number = 17;

const authentication_endpoint = 'xxxx.xxxx.xxxx';

@Injectable()
export class CookieService {
    constructor( private _http: HttpClient){}

    isTokenPresentInSessionStorage(): boolean {
        if(sessionStorage.getItem('Authorization')){
            return true;
        }
        else{
            return false;
        }
    }

    setDetailsInSessionStorage(userId:string, userToken: string){
        let authorization = "UID:"+ userId + ","+"GUID:"+userToken;
        sessionStorage.setItem('Authorization', authorization);
        sessionStorage.setItem('user_name', userId);
        sessionStorage.setItem('auth_token', userToken);
    }

    getAuthenticationInfoFromServer(userName:string, userToken:string){
        return this._http.get(authentication_endpoint);
    }
    getUIServiceDetailsFromSessionStorage(): any {
        return sessionStorage.getItem('ui_service-socket_address');
    }
    setUIServiceDetailsInSessionStorage(socketAddress: string): void {
        sessionStorage.setItem('ui_service-socket_address', socketAddress);
    }
    setUserEntitlementsInSessionStorage(entitledresource: string[]){
        sessionStorage.setItem('EntitledResources', JSON.stringify(entitledresource));
    }
    clearUserAuthenticationDetailsFromSessionStorage(){
        sessionStorage.removeItem('user_name');
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('Authorization');
    }
    private parseUserInfoFileDataResponse(res: HttpResponse<string>){
        return res;
    }
    private getUserNameFromAuthDetails(authDetails:string): string {
        return authDetails.substring(UID_START_INDEX, UI_END_INDEX);
    }
    private getUserTokenFromAuthservice(authDetails:string): string {
        return authDetails.substring(GUID_START_INDEX, authDetails.length);
    }
    private handleCookieError(resp: HttpResponse<string>){
        //error
    }
}