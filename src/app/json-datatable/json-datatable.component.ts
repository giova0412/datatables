import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-datatable',
  templateUrl: './json-datatable.component.html',
  styleUrls: ['./json-datatable.component.css'],
  standalone: true,
  imports: [DataTablesModule, CommonModule]
})
export class RouterLinkComponent implements OnInit {
  dtOptions: any = {};
  selectedData: any = null;
  showModal = false;

  private mockData = [
    { id: 1, name: "Luke Skywalker", type: "Jedi", lightsaberColor: "Verde/Azul" },
    { id: 2, name: "Darth Vader", type: "Sith", lightsaberColor: "Rojo" },
    { id: 3, name: "Obi-Wan Kenobi", type: "Jedi", lightsaberColor: "Azul" },
    { id: 4, name: "Boba Fett", type: "Cazador", weapon: "Rifle Blaster" },
    { id: 5, name: "Yoda", type: "Jedi", lightsaberColor: "Verde" },
    { id: 6, name: "Darth Sidious", type: "Sith", lightsaberColor: "Rojo" },
    { id: 7, name: "Din Djarin", type: "Cazador", weapon: "Rifle Amban" },
    { id: 8, name: "Ahsoka Tano", type: "Jedi", lightsaberColor: "Blanco" },
    { id: 9, name: "Darth Maul", type: "Sith", lightsaberColor: "Rojo Doble" },
    { id: 10, name: "Cad Bane", type: "Cazador", weapon: "Pistolas Gemelas" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      data: this.mockData,
      pageLength: 10,
      lengthChange: false,
      searching: false,
      language: {
        zeroRecords: "No se encontraron personajes",
        info: "Mostrando _START_ a _END_ de _TOTAL_ personajes",
        infoEmpty: "Mostrando 0 personajes",
        infoFiltered: "(filtrado de _MAX_ personajes totales)"
      },
      columns: [
        {
          title: 'ID',
          data: 'id'
        }, {
          title: 'Personaje',
          data: 'name'
        }, {
          title: 'Tipo',
          data: 'type'
        },
        {
          title: 'Acción',
          render: (data: any, type: any, full: any) => {
            return `<button class="btn btn-info" onclick="window.showDetails(${full.id})">Ver detalles</button>`;
          }
        }
      ],
      dom: 'frtip'
    };

    (window as any).showDetails = (id: number) => {
      const data = this.mockData.find(item => item.id === id);
      if (data) {
        this.selectedData = data;
        alert(JSON.stringify(this.selectedData, null, 2));
      }
    };
  }
}
