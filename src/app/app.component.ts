// decorator for anuglar to know this is a component
import { Component } from '@angular/core';
// app component = root component

// {} = configuration object
@Component({
  // provides reference for sth that can be selected in body and injects component into it
  // see app-root from index.html
  selector: 'app-root',
  // used to render app and style
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
