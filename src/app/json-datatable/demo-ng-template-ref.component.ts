import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng',
  standalone: true,
  template: '<button (click)="onClick()">Ver detalles</button>'
})
export class DemoNgComponent {
  data: any;
  captureEvents: (event: any) => void = () => {};

  onClick(): void {
    this.captureEvents({ data: this.data });
  }
}
