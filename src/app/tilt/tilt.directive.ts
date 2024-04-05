import { Directive, HostListener, Input, signal } from '@angular/core';

@Directive({
  selector: '[tilt]',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[style.transform]': 'rotation()',
  },
})
export class TiltDirective {
  @Input('tilt') rotationDegree = 30;

  @HostListener('mouseenter', ['$event.pageX', '$event.target'])
  onMouseEnter(pageX: number, target: HTMLElement) {
    const pos = determineDirection(pageX, target);
    this.rotation.update(() => {
      return pos === 0
        ? `rotate(${this.rotationDegree}deg)`
        : `rotate(-${this.rotationDegree}deg)`;
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.rotation.update(() => 'rotate(0deg)');
  }

  rotation = signal('rotate(0deg)');
}

/**
 * returns 0 if entered from left, 1 if entered from right
 */
function determineDirection(pos: number, element: HTMLElement): 0 | 1 {
  const width = element.clientWidth;
  const middle = element.getBoundingClientRect().left + width / 2;
  return pos > middle ? 1 : 0;
}
