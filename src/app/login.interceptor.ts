import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        let myToken = localStorage.getItem('token');
        if(myToken) {
            let p = new HttpParams().set('access_token', myToken);
            let cloneReq = req.clone(
                {
                    params : p
                }
            );
            console.log(cloneReq);
            return next.handle(cloneReq);
        }
        return next.handle(req);
    }

}

export const loginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : LoginInterceptor,
    multi : true 
}