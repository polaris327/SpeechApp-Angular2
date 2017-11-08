import { SpeechSearchComponent } from './components/speech/speech-search/speech-search.component';
import { SpeechSubmitComponent } from './components/speech/speech-submit/speech-submit.component';
import { SpeechListComponent } from './components/speech/speech-list/speech-list.component';
export const routes = [
  { path: 'list',
    linkText: 'View my Speeches',
    iconClass: 'fa fa-list-alt',
    component: SpeechListComponent},
  { path: 'submit',
    linkText: 'Submit a new Speech',
    iconClass: 'fa fa-plus-square-o',
    component: SpeechSubmitComponent},
  { path: 'search',
    linkText: 'Search all Speeches',
    iconClass: 'fa fa-search',
    component: SpeechSearchComponent},
  { path: '', component: SpeechListComponent }
];
