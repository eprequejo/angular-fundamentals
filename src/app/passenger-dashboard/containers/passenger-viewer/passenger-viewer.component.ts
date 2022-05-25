import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: "passenger-viewer",
    templateUrl: './passenger-viewer.component.html',
    styleUrls: ["./passenger-viewer.component.css"],
})
export class PassengerViewerComponent implements OnInit {

    passenger: Passenger | undefined;

    constructor(private passengerDashboardService: PassengerDashboardService) { }

    ngOnInit(): void {
        this.passengerDashboardService.getPassenger(1).subscribe(d => this.passenger = d);
    }

    onUpdatePassenger(event: Passenger) {
        console.log(event);
        this.passengerDashboardService.updatePassengers(event).subscribe(d => {
            this.passenger = Object.assign({}, this.passenger, event);
        })
    }

}