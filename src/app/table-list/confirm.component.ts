import { Component, Output, EventEmitter } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-app',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
  closeResult: string;
  @Output() event = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

}
