import { Component, Input } from '@angular/core';
import { Shift } from './Shift';
import { ShiftService } from './shift.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shift-modal',
  templateUrl: './shift-modal.component.html'
})
export class ShiftModalComponent {
  closeResult: string;
  @Input() shifts: Shift[];
  shiftType: String;
  shiftDuration: String;

  constructor(private modalService: NgbModal, private naService: ShiftService) { }

  // them quoc gia
  addShift(formSignIn) {
    console.log('add....' + formSignIn.value);
    this.naService
      .addShift(formSignIn.value)
      .subscribe((shift: Shift) => {
        this.shifts.push(shift); // { id: '3', name: 'xcz', describe: 'xzc' } can nghien cuu
        // xoa du lieu trong form
        this.shiftType = '';
        this.shiftDuration = '';
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