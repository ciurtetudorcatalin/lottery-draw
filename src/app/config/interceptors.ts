import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { GetInterceptor } from "@core/interceptors/get/get.interceptor";

export const INTERCEPTORS_PROVIDER: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: GetInterceptor, multi: true }
]
