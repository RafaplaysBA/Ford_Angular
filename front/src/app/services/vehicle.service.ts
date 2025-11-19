import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Veiculo, Veiculos, VeiculosAPI } from "../models/veiculo.model";
import { InfoVehicle } from "../models/info-vehicle.model";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class VehicleService {

  private urlVehicle : string = `${environment.api}/vehicles`;
  private urlVehicleData : string = `${environment.api}/vehicleData`;

  public constructor(private httpClient: HttpClient) {}

  public getVehicles() : Observable<VeiculosAPI> {
    return this.httpClient.get<VeiculosAPI>(this.urlVehicle);
  }

  public getInfoVehicles(vin : String) : Observable<InfoVehicle>{
    return this.httpClient.post<InfoVehicle>(this.urlVehicleData, { vin });
  }

}