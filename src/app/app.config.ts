import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  ɵprovideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFastSVG } from '@push-based/ngx-fast-svg';
import { ɵChangeDetectionScheduler as ChangeDetectionScheduler } from '@angular/core';

import { routes } from './app.routes';
import { readAccessInterceptor } from './read-access.interceptor';
import { CustomChangeDetectionSchedulerService } from './core/custom-change-detection-scheduler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([readAccessInterceptor])),
    provideRouter(routes),
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
      defaultSize: '12',
    }),
    ɵprovideZonelessChangeDetection(),
    {
      provide: ChangeDetectionScheduler,
      useClass: CustomChangeDetectionSchedulerService,
    },
  ],
};
