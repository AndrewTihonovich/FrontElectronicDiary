import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()

export class TokenInterceptor implements HttpInterceptor {

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
            return next.handle(req);
        }
    }
}