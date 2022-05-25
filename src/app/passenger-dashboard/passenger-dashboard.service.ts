import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Passenger } from "./models/passenger.interface";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'


const PASSENGER_API: string = "assets/db.json";

@Injectable()
export class PassengerDashboardService {

    passengersMock: Array<Passenger> = [
        { "id": 1, "name": "estela", "checked": true, "date": 1490742000000, "children": [{ "name": "leo", "age": 8 }, { "name": "eric", "age": 4 }]},
        { "id": 2, "name": "felipe", "checked": false, baggage: "hand" },
        { "id": 3, "name": "leo", "checked": true, "date": 1490742000000},
        { "id": 4, "name": "eric", "checked": true, "date": 1490742000000}
    ];

    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Array<Passenger>> {
        // return this.http.get<Array<Passenger>>(PASSENGER_API)
        //     .pipe(catchError(e => throwError(e)))
        return of(this.passengersMock);
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

    getPassenger(id: number): Observable<Passenger> {
        // return this.http.get<Passenger>(`${PASSENGER_API}/${id}`)
        //     .pipe(catchError(e => throwError(e)));
        return of(this.passengersMock[1]);
    }
}