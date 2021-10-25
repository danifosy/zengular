import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// allows to pass metadata to describe how to compile + inject code at runtime
// only one root module per app, thats why we import other modules in array
import { AppComponent } from './app.component';

@NgModule({
  // property that allows to provide array of components that will be initialized when app starts
  bootstrap: [AppComponent],
  // declare components used in app
  declarations: [AppComponent],
  imports: [BrowserModule],
})
// modules organize app and extend them with other modules
export class AppModule {}
