import { Component } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector: "passenger-dashboard",
    styleUrls: ["./passenger-dashboard.component.css"],
    templateUrl: "./passenger-dashboard.component.html"
})
export class PassengerDashboardComponent {

    passengers: Array<Passenger> = [
        { id: 1, name: "estela", checked: true, date: 1490742000000, children: [{ name: "leo", age: 8 }, { name: "eric", age: 4 }]},
        { id: 2, name: "felipe", checked: false},
        { id: 3, name: "leo", checked: true, date: 1490742000000},
        { id: 4, name: "eric", checked: true, date: 1490742000000}
      ];

}