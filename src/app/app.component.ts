import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, AjaxDatatableComponent]
})
export class AppComponent {
  title = 'datatables';
}
