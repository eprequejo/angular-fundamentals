import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";


@Component({
    selector: "passenger-dashboard",
    styleUrls: ["./passenger-dashboard.component.css"],
    templateUrl: "./passenger-dashboard.component.html"
})
export class PassengerDashboardComponent implements OnInit {

    passengers: Array<Passenger> = [];

    constructor(private passengerDashboardService: PassengerDashboardService) {}

    ngOnInit(): void {

        this.passengerDashboardService.getPassengers().subscribe(s => {
            console.log(s)
            this.passengers = s;
        })
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter(p => {
            return event.id !== p.id;
        });
    }

    handleEdit(event: Passenger) {
        this.passengerDashboardService
            .updatePassengers(event)
            .subscribe(s => {
                this.passengers = this.passengers.map(p => {
                    if (p.id === event.id) {
                        p = Object.assign({}, p, event);
                    }
                    return p;
                });
            });
    }

}