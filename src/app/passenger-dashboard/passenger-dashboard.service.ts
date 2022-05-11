import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Passenger } from "./models/passenger.interface";
import { Observable } from "rxjs";

const PASSENGER_API: string = "assets/db.json";

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Array<Passenger>> {
        return this.http.get<Array<Passenger>>(PASSENGER_API)
    }

    updatePassengers(p: Passenger): Observable<Passenger> {
        return this.http.put<Passenger>(`assets/${p.id}`, p);
    }
}