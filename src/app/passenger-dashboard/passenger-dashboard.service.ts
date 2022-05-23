import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Passenger } from "./models/passenger.interface";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'


const PASSENGER_API: string = "assets/db.json";

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Array<Passenger>> {
        return this.http.get<Array<Passenger>>(PASSENGER_API)
            .pipe(catchError(e => throwError(e)))
    }

    updatePassengers(p: Passenger): Observable<Passenger> {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        let options = { headers: headers };
        return this.http.put<Passenger>(`assets/${p.id}`, p, options);
    }

    removePassengers(p: Passenger): Observable<Passenger> {
        return this.http.delete<Passenger>(`assets/${p.id}`);
    }
}