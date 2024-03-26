import { Component } from '@angular/core';

@Component({
  selector: 'app-dirty-checks',
  standalone: true,
  template: ` <code class="dirty-checks">( {{ renders() }} )</code> `,
  styles: `
    :host {
      display: inline-block;
      border-radius: 100%;
      border: 2px solid var(--palette-secondary-main);
      padding: 1rem;
      font-size: var(--text-lg);
    }
  `,
})
export class DirtyChecksComponent {
  private _renders: number = 0;

  renders(): number {
    return this._renders++;
  }
}
