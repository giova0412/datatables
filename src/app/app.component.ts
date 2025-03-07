import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasicDatatableComponent],
  template: `
    <app-basic-datatable></app-basic-datatable>
  `
})
export class AppComponent {
  title = 'dataTable_230314';
}
