import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../Vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {


  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) { }


  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.vehiculos.push(carro1, carro2, carro3)

    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}

let carro1 = new Vehiculo (7, 'bmw', '420', 'nitro', 2022, 0, 'Blanco', "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg");
let carro2 = new Vehiculo (8, 'Mercedez-benz', 'Series A', 'Race', 2022, 0, 'Rojo', "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg");
let carro3 = new Vehiculo (9, 'Renault', 'Megane', 'Classic', 2006, 0, 'Blanco', "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg");

