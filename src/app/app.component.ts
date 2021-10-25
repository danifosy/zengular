// decorator for anuglar to know this is a component
import { Component } from '@angular/core';
// app component = root component

// {} = configuration object
@Component({
  // provides reference for sth that can be selected in body and injects component into it
  // see app-root from index.html
  selector: 'app-root',
  // syntax used to render app
  template: '<p>Hello World</p>',
})
export class AppComponent {}
