import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
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

            return next.handle(cloned);
        }
        else {
            this.router.navigate(['/login']);
            return next.handle(req);
        }
    }
}