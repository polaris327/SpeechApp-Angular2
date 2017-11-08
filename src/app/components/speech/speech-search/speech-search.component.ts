import { Speech } from '../speech.model';
import { SpeechApiService } from '../../../core/speech-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-search',
  templateUrl: './speech-search.component.html',
  styleUrls: ['./speech-search.component.scss']
})
export class SpeechSearchComponent implements OnInit {
  seachQuery: string;
  result: Array<Speech> = [];
  constructor(private api: SpeechApiService) { }

  ngOnInit() {
  }
  getIndex(speech: Speech): number {
    return SpeechApiService.speeches.indexOf(speech);
  }
  search() {
    this.result = this.api.search(this.seachQuery);
  }

}
