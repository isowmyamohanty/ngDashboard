import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

class RequestConstructor {
    protected setRequestHeaders(_user_security_token: string): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': _user_security_token
        });
    }
    protected setRequestOptionsTorequest() {

    }
}
@Injectable()
export class JsonDataFromEndpointservice extends RequestConstructor {
    constructor(private _http: HttpClient){
        super();
    }

    getJsonDataFromServer(_endpoint: string, _user_name: string, _user_security_token: string){
        let headers = this.setRequestHeaders(_user_security_token);
        return this._http.get(_endpoint, {headers: headers})
    }
    sendDataToServerWithMessageBody(_endpoint: string, _message_body: any){
        return this._http.post(_endpoint, _message_body);
    }
    sendDataToServerWithMessageBodyAndAuthorizationHeader(_endpoint: string, _message_body: any, _user_name: string, _user_security_token: string){
        let headers = this.setRequestHeaders(_user_security_token);
        return this._http.post(_endpoint, _message_body, {headers: headers});
    }
    authenticateUser(_endpoint:string, _message_body: string){
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post(_endpoint, _message_body, {headers: headers});
    }
    autorizeuser(_endpoint:string, _message_body: any){
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post(_endpoint, _message_body, {headers: headers});
    }
}