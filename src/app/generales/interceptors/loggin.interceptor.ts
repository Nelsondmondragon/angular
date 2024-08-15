import { HttpInterceptorFn } from '@angular/common/http';

export const logginInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loggin Interceptor');
  console.log(req);
  var newreq = req.clone({ setHeaders: { 'X-example-ID': '2222' } });
  console.log(newreq);
  return next(newreq);
};
