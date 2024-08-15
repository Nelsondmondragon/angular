import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loggin Interceptor');
  console.log(req);
  var newreq = req.clone({ setHeaders: { Authorization : 'My token' } });
  console.log(newreq);
  return next(newreq);
};
