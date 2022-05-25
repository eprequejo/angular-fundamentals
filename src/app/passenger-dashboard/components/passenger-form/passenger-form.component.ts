import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Baggage } from "../../models/baggage.interface";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: "passenger-form",
    templateUrl: './passenger-form.component.html',
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger | undefined;
    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Array<Baggage> = [
        { key: "none", value: "No baggage"},
        { key: "hand", value: "Hand baggage"},
        { key: "hold", value: "Hold baggage"}
    ];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn && this.detail) {
            this.detail.date = Date.now();
        }
    }

    handleSubmit(form: Passenger, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(form);
        }
    }

}