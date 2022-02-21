import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor( private router:Router){}
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const currentUserToken = sessionStorage.getItem("currentUserToken");

        if (currentUserToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + currentUserToken)
            });

            return this.sendReuest(cloned, next);
        }
        else {
            //this.router.navigate(['/login']);
            return this.sendReuest(req, next);
        }
    }

    sendReuest(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                sessionStorage.removeItem("currentUserToken");
                sessionStorage.removeItem("currentUser");
                this.router.navigate(['/login']);
            }
            const error = err.error.message || err.statusText;
                return throwError(()=>error);
        }));;
    }
}