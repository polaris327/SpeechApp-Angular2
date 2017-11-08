import { Speech } from '../speech.model';
import { SpeechApiService } from '../../../core/speech-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit {
  speechList: Array<Speech>;
  selectedSpeech: Speech = new Speech();
  selectedIndex: number = -1;
  sub: any;

  constructor(
      private api:SpeechApiService,
      private router: Router,
      private route: ActivatedRoute
  ) {



  }



  ngOnInit() {
    this.api.getSpeechData().then( (data: any) => {
      if(SpeechApiService.speeches.length) {
        this.speechList = SpeechApiService.speeches;
        this.speechList.concat(data.data);
        if(!this.selectedSpeech) {
          this.selectedSpeech = this.speechList[0];
          this.selectedIndex = 0;
        }
      }  else {
        this.speechList = data.data;
        if(!this.selectedSpeech) {
          this.selectedSpeech = this.speechList[0];
          this.selectedIndex = 0;
        }
        SpeechApiService.speeches = this.speechList;
      }

      this.sub = this.route
      .queryParams
      .subscribe(params => {
          let index = params['index'] || 0 ;
          if(SpeechApiService.speeches) {
              this.selectedSpeech = SpeechApiService.speeches[index];
              this.selectedIndex = index;
          }
      });
    });


  }
  removeSpeech() {
    this.speechList.splice(this.selectedIndex, 1);
    SpeechApiService.speeches = this.speechList;
    SpeechApiService.update();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectSpeech( item: Speech, idx: number ) {
    this.selectedSpeech = item;
    this.selectedIndex = idx;
  }

}
