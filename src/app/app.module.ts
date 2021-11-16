import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NotificationComponent } from './notification/notification.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { CardRowComponent } from './card-row/card-row.component';
import { CardComponent } from './card-row/card/card.component';

// allows to pass metadata to describe how to compile + inject code at runtime
// only one root module per app, thats why we import other modules in array
@NgModule({
  // property that allows to provide array of components that will be initialized when app starts
  bootstrap: [AppComponent],
  // declare components used in app
  declarations: [
    AppComponent,
    QuestionComponent,
    NotificationComponent,
    ScoreComponent,
    TimerComponent,
    CardRowComponent,
    CardComponent,
  ],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
})
// modules organize app and extend them with other modules
export class AppModule {}
