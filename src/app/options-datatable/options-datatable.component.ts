import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

// Añadir esta importación
import 'datatables.net';

@Component({
  selector: 'app-options-datatable',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  templateUrl: './options-datatable.component.html',
  styleUrl: './options-datatable.component.css'
})
export class OptionsDatatableComponent implements OnInit {
  // Cambiar el tipo a any temporalmente si persiste el error
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      searching: true,
      ordering: false,
      info: false,
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
  }
}
