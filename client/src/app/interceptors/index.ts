/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptor } from './request.interceptor';
//import { FakeBackendInterceptor } from './fake.backend';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  //{ provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
];