import { Component } from '@angular/core';

@Component({
  //app-root is within index.html
  selector: 'app-root', //the HTML tag you can use to render thie component
  templateUrl: './app.component.html', // <-- clean data
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppointmentApp';
}
