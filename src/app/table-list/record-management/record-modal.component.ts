import { Component, Input } from '@angular/core';
import { Record } from './Record';
import { RecordService } from './record.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-record-modal',
  templateUrl: './record-modal.component.html'
})
export class RecordModalComponent {
  closeResult: string;
  @Input() records: Record[];
  recordName: String;
  recordDescribe: String;

  constructor(private modalService: NgbModal, private naService: RecordService) { }

  // them quoc gia
  addRecord(formSignIn) {
    console.log('add....' + formSignIn.value);
    this.naService
      .addRecord(formSignIn.value)
      .subscribe((record: Record) => {
        this.records.push(record); // { id: '3', name: 'xcz', describe: 'xzc' } can nghien cuu
        // xoa du lieu trong form
        this.recordName = '';
        this.recordDescribe = '';
        // vo hieu hoa modal
        this.modalService.dismissAll();
        // thong bao
        alert('Thêm thành công');
      });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }
}
