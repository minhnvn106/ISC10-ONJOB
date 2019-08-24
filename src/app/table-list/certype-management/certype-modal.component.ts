import { Component, Input } from '@angular/core';
import { CerType } from './CerType';
import { CerTypeService } from './certype.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-certype-modal',
  templateUrl: './certype-modal.component.html'
})
export class CerTypeModalComponent {
  closeResult: string;
  @Input() certypes: CerType[];
  certypeName: String;
  certypeField: String;

  constructor(private modalService: NgbModal, private naService: CerTypeService) { }

  // them quoc gia
  addCerType(formSignIn) {
    console.log('add....' + formSignIn.value);
    this.naService
      .addCerType(formSignIn.value)
      .subscribe((certype: CerType) => {
        this.certypes.push(certype); // { id: '3', name: 'xcz', describe: 'xzc' } can nghien cuu
        // xoa du lieu trong form
        this.certypeName = '';
        this.certypeField = '';
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
