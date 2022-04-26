import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: "passenger-count",
    templateUrl: './passenger-count.component.html',
})
export class PassengerCountComponent {

    @Input()
    items!: Array<Passenger>;

    checkInCount(): number {
        if (!this.items) return 0;
        return this.items.filter(passengers => passengers.checked).length;
    }

}