import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-basic-datatable',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './basic-datatable.component.html',
  styleUrls: ['./basic-datatable.component.css']
})
export class BasicDatatableComponent implements OnInit {
  dtOptions: any = {};
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25, 50, 100], // Más opciones de registros por página
      processing: true,
      language: {
        lengthMenu: 'Mostrar _MENU_ registros por página', // Personaliza el texto
      }
    };
  }
}
