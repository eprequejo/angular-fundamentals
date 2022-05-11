import { Component, Input, Output, OnChanges, OnInit, EventEmitter, SimpleChanges } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: "passenger-detail",
    templateUrl: './passenger-detail.component.html',
    styleUrls: ["./passenger-detail.component.css"]
})
export class PassengerDetailComponent implements OnChanges, OnInit {
    @Input()
    detail!: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    editing: boolean = false;

    // ngOnChanges gets called before ngOnInit => the data is avalaible in the component before it is initialised
    ngOnChanges(changes: any): void {
        console.log("ngOnChanges");
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    ngOnInit(): void {
        console.log("ngOnInit");
    }

    onNameChange(value: string) {
        this.detail.name = value;
    }

    toogleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

}