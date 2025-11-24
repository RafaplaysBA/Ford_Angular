import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { Veiculo, Veiculos } from '../models/veiculo.model';
//import { StorageService } from '../services/storage.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public selectedVehicle?: Veiculo;

  public vehicles!: Veiculos;

  public constructor(private vehicleService: VehicleService, ) {
  
    this.getVehicles();
  }

  public getVehicles(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (veiculos) => {
        this.vehicles = veiculos.vehicles;
        this.getVehicleById(1);
      }
    }
    );
  }
  
  public getVehicleById(id: Number): void {
    for (let vehicle of this.vehicles) {
      if (vehicle.id === id) {
        this.selectedVehicle = vehicle;
      }
    }
  }
}

