import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    reqCount = 0;
    noHeaderRequest = 'maps.googleapis.com';
    loaderText = '';
    constructor(
        private router: Router,
        private commonService: CommonService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newHeaders = req.headers;
       
        if (!req.url.includes(this.noHeaderRequest)) {
            const token = localStorage.getItem('remote_token');

            newHeaders.append('Content-Type', 'application/json').append('Accept', 'application/json');
            if (token) {
                newHeaders = newHeaders.append('Authorisation', token);
            }
        }

        const authReq = req.clone({ headers: newHeaders });
        
        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError(error => {
                if(error.error.message)
                    this.commonService.showToast(error.error.message,'danger');
                    this.commonService.dismissLoader();
                if (error.status === 401 && !req.url.includes('login')) {
                    localStorage.removeItem('remote_token');
                    this.router.navigate(['/login']);
                }
                return throwError(error.error.message || 'server error.');
            })
        );
    }
}
