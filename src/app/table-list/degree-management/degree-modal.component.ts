import { Component, Input } from '@angular/core';
import { Degree } from './Degree';
import { DegreeService } from './degree.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-degree-modal',
  templateUrl: './degree-modal.component.html'
})
export class DegreeModalComponent {
  closeResult: string;
  @Input() degrees: Degree[];
  degreeName: String;
  degreeDescribe: String;

  constructor(private modalService: NgbModal, private naService: DegreeService) { }

  // them quoc gia
  addDegree(formSignIn) {
    console.log('add....' + formSignIn.value);
    this.naService
      .addDegree(formSignIn.value)
      .subscribe((degree: Degree) => {
        this.degrees.push(degree); // { id: '3', name: 'xcz', describe: 'xzc' } can nghien cuu
        // xoa du lieu trong form
        this.degreeName = '';
        this.degreeDescribe = '';
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
