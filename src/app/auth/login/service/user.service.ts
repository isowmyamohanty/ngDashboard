import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {CookieFields, CookieService} from '../../../service/cookie.service';
import {JsonDataFromEndpointservice} from '../../../service/http-endpoint.service';
import { RestEndpointProvider } from 'src/app/service/rest-endpoint.service';

interface User {
    userName: string,
    userPassword: string
}

@Injectable()
export class UserService {
    loggedIn: boolean = false;
    redirectUrl: string = '';

    constructor(private _cokkieService: CookieService, private _hhtpService: JsonDataFromEndpointservice, private _router: Router){
        this.loggedIn = !!this._cokkieService.isTokenPresentInSessionStorage();
    }

    logout(){
        sessionStorage.removeItem('Authorization');
        this.loggedIn = false;
    }

    isLoggedIn() : boolean {
        return this.loggedIn;
    }

    login(userName: string, userPassword: string){
        /*
        let userLoginCredentials:User = {userName: userName, userPassword: userPassword};
        this._hhtpService.authenticateUser(RestEndpointProvider.getEndpointForUserNameAndPasswordVerification(), JSON.stringify(userLoginCredentials))
        .subscribe(data => {
            let response = data.json();
            if(response.UID && response.GUID){
                let authDetails: string = 'UID' + response.UID + '' + 'GUID' + response.GUID;
                let cookieFields: CookieFields = {Authorization: authDetails, UID: response.UID, GUID: response.GUID}
                this._cokkieService.setDetailsInSessionStorage(cookieFields);
            }
        })
*/
    }
}