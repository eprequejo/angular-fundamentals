import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: "passenger-detail",
    templateUrl: './passenger-detail.component.html',
    styleUrls: ["./passenger-detail.component.css"]
})
export class PassengerDetailComponent {
    @Input()
    detail!: Passenger;

}