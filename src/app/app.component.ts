import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // property binding
  title = 'my-seed';
  logo = "../favicon.ico";
  name = "estela";

  // event binding
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleClick() {
    this.name = "name changed";
  }

  // two ways data binding
  handleChange(value: string) {
    this.name = value; 
  }

  // template ref
  handleClickWithRef(value: string) {
    this.name = value;
  }

  // ngIf
  handleChange2(event: any) {
    this.name = event.target.value; 
  }
}
