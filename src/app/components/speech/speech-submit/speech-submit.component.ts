import { Router } from '@angular/router';
import { SpeechApiService } from '../../../core/speech-api.service';
import { Speech } from '../speech.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-submit',
  templateUrl: './speech-submit.component.html',
  styleUrls: ['./speech-submit.component.scss']
})
export class SpeechSubmitComponent implements OnInit {
  newSpeech: Speech = new Speech();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSpeechSave(item: Speech) {
    SpeechApiService.speeches.push(item);
    SpeechApiService.update();
    this.router.navigate(['/list'], { queryParams: { index: SpeechApiService.speeches.length - 1 } });
  }
}
