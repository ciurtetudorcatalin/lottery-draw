import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { GetInterceptor } from "@core/interceptors/get.interceptor";
import { PostInterceptor } from "@core/interceptors/post.interceptor";

export const INTERCEPTORS_PROVIDER: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: GetInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: PostInterceptor, multi: true },
]
