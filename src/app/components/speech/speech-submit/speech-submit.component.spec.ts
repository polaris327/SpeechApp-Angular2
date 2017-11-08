import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechSubmitComponent } from './speech-submit.component';

describe('SpeechSubmitComponent', () => {
  let component: SpeechSubmitComponent;
  let fixture: ComponentFixture<SpeechSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
