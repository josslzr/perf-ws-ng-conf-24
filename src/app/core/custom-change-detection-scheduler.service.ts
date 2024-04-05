import { ApplicationRef, Injectable } from '@angular/core';
import { ɵChangeDetectionScheduler as ChangeDetectionScheduler } from '@angular/core';
import { exhaustMap, Subject, tap, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CustomChangeDetectionSchedulerService
  implements ChangeDetectionScheduler
{
  private notify$ = new Subject<void>();

  constructor(private appRef: ApplicationRef) {
    this.notify$
      .pipe(
        exhaustMap(() => timer(0).pipe(tap(() => this.appRef.tick()))),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  notify() {
    this.notify$.next();
  }
}
