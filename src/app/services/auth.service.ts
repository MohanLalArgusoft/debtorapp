import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) { }

    authenticate(debtor_id, debtor_dob) {
        const apiURL = SERVER_URL + 'b/system/v1/session/debtor_login';
        const data = {
            debtor_id: debtor_id,
            debtor_dob: debtor_dob
        };
        return this.http.post(apiURL, data);
    }
}
