import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) { }

    authenticate(debtor_id, debtor_dob) {
        const apiURL = 'http://production.dcd.local:8081/b/system/v1/session/debtor_login';
        const data = {
            debtor_id: debtor_id,
            debtor_dob: debtor_dob
        };
        return this.http.post(apiURL, data);
    }
}
