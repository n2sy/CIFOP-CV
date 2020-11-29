import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let myToken = localStorage.getItem('token');
        if(myToken) {
            let p = new HttpParams();
            let keys = req.params.keys();
            
            for(let k in keys) {req.params.get(keys[k])
                p = p.set(keys[k], req.params.get(keys[k]));
            }
            // for(let k of keys) {
            //     console.log(k);
            //     console.log(req.params.get(k));
            //     p = p.set(k, req.params.get(k));
            // }

            p = p.set('access_token', myToken);
            let cloneReq = req.clone(
                {
                    params : p
                }
            );
            //console.log(cloneReq);
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