import { Component, Input } from '@angular/core';
import { Nation } from './nation';
import { NationService } from './nation.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nation-modal',
  templateUrl: './nation-modal.component.html'
})
export class NationModalComponent {
  closeResult: string;
  @Input() nations: Nation[];
  nationName: String;
  nationDescribe: String;

  constructor(private modalService: NgbModal, private naService: NationService) { }

  // them quoc gia
  addNation(formSignIn) {
    console.log('add....' + formSignIn.value);
    this.naService
      .addNation(formSignIn.value)
      .subscribe((nation: Nation) => {
        this.nations.push(nation); // { id: '3', name: 'xcz', describe: 'xzc' } can nghien cuu
        // xoa du lieu trong form
        this.nationName = '';
        this.nationDescribe = '';
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