import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppShellComponent } from './app-shell/app-shell.component';
import { DirtyChecksComponent } from './shared/dirty-checks/dirty-checks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppShellComponent, DirtyChecksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-shell>
      <app-dirty-checks></app-dirty-checks>
      <router-outlet />
    </app-shell>
  `,
})
export class AppComponent {}
