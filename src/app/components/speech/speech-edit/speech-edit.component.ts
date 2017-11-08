import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Speech } from '../speech.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var emailjs: any;

@Component({
  selector: 'speech-edit',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})
export class SpeechEditComponent implements OnInit {
    @Input() speech: Speech;
    @Input() title: String = '';
    @Input() hideDeleteBtn: Boolean;
    @Input() hideShareBtn: Boolean;
    @Output() onSpeechDelete: EventEmitter<any> = new EventEmitter();
    @Output() onSpeechSave: EventEmitter<any> = new EventEmitter();
    closeResult: string;
    modalRef: NgbModalRef;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    emailjs.init("user_IBVTOHnPRneri0GSLQXdA");
  }
  onSave() {
    this.onSpeechSave.emit(this.speech);
  }
  isValidDate(value) {
    if(value) {
      let dateWrapper = new Date(value);
      return !isNaN(dateWrapper.getDate());
    } 
    return true;
  }
  sendSpeechToEmail(reply_to:string) {
    if( !reply_to || reply_to.trim() === '') {
      this.modalRef.close();
      return;
    }
    emailjs.send("gmail", "template_5jjMU201", {
      "reply_to": reply_to,
      "from_name": "speech-app@gmail.com",
      "title": this.speech.title,
      "author": this.speech.author,
      "date": `${this.speech.date.day}/${this.speech.date.month}/${this.speech.date.year}`,
      "message_html": this.speech.content
    });
    this.shareSpeech();
    this.modalRef.close();
  }

  open(content) {
    this.modalRef = this.modalService.open(content)
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  shareSpeech() {
    this.speech.isShared = !this.speech.isShared;
  }
  removeSpeech() {
    this.onSpeechDelete.emit();
  }
}
