import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { Session } from '../models/session.model';

@Component({
  selector: 'app-ajax-datatable',
  templateUrl: './ajax-datatable.component.html',
  styleUrls: ['./ajax-datatable.component.css'],
  standalone: true,
  imports: [DataTablesModule, CommonModule]
})
export class AjaxDatatableComponent implements OnInit {
  constructor(private http: HttpClient) { }

  dtOptions: any = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    serverSide: false,
    ajax: {
      url: 'http://localhost:3000/Allsessions',
      beforeSend: function() {
        console.log('Realizando petición a la API...');
      },
      dataSrc: function(json: any) {
        console.log('Respuesta de la API:', json);
        if (!json.sessions) {
          console.error('No hay sesiones en la respuesta');
          return [];
        }
        // Formatear datos si es necesario
        return json.sessions.map((session: any) => ({
          ...session,
          inactivityTime: session.inactivityTime ? 
            `${session.inactivityTime.hours}h ${session.inactivityTime.minutes}m ${session.inactivityTime.seconds}s` : '-',
          durationTime: session.durationTime ?
            `${session.durationTime.hours}h ${session.durationTime.minutes}m ${session.durationTime.seconds}s` : '-'
        }));
      },
      error: function(xhr: any, error: any, thrown: any) {
        console.error('Error en la petición:', error);
      }
    },
    columns: [
      { 
        title: 'ID', 
        data: 'sessionID',
        width: '10%'
      },
      { 
        title: 'Email', 
        data: 'email',
        width: '15%'
      },
      { 
        title: 'Usuario', 
        data: 'nickname',
        width: '15%'
      },
      { 
        title: 'Estado', 
        data: 'status',
        width: '15%',
        render: (data: string) => {
          const colors: any = {
            'Activa': 'success',
            'Inactiva': 'warning',
            'Finalizada por el Usuario': 'danger',
            'Finalizada por Error del Sistema': 'dark'
          };
          return `<span class="badge bg-${colors[data] || 'secondary'}">${data}</span>`;
        }
      },
      { 
        title: 'Última Actividad',
        data: 'lastAccess',
        width: '15%'
      },
      { 
        title: 'Tiempo Inactivo',
        data: 'inactivityTime',
        width: '15%'
      },
      { 
        title: 'Duración',
        data: 'durationTime',
        width: '15%'
      }
    ],
    dom: '<"top"f>rt<"bottom"ip>',
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ elementos",
      info: "Mostrando _START_ a _END_ de _TOTAL_ sesiones",
      infoEmpty: "Mostrando 0 sesiones",
      infoFiltered: "(filtrados de _MAX_ sesiones totales)",
      infoPostFix: "",
      loadingRecords: "Cargando sesiones...",
      zeroRecords: "No se encontraron sesiones",
      emptyTable: "No hay datos disponibles",
      paginate: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Último"
      }
    }
  };

  ngOnInit(): void {
    // Verificar conexión inicial
    this.http.get('http://localhost:3000/Allsessions').subscribe({
      next: (response) => {
        console.log('Verificación de conexión exitosa:', response);
      },
      error: (error) => {
        console.error('Error de conexión:', error);
      }
    });
  }
}
