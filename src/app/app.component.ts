import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { OptionsDatatableComponent } from './options-datatable/options-datatable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasicDatatableComponent, OptionsDatatableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataTable_230314';
}
