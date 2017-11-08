import { SpeechEditComponent } from './components/speech/speech-edit/speech-edit.component';
import { SpeechApiService } from './core/speech-api.service';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SpeechSearchComponent } from './components/speech/speech-search/speech-search.component';
import { SpeechSubmitComponent } from './components/speech/speech-submit/speech-submit.component';
import { SpeechListComponent } from './components/speech/speech-list/speech-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SpeechSearchComponent,
    SpeechSubmitComponent,
    SpeechListComponent,
    SpeechEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SpeechApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
