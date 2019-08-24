import { Component, Input } from '@angular/core';
import { Province } from './Province';
import { ProvinceService } from './province.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-province-modal',
  templateUrl: './province-modal.component.html'
})
export class ProvinceModalComponent {
  closeResult: string;
  @Input() provinces: Province[];
  provinceName: String;
  provinceAddress: String;

  constructor(private modalService: NgbModal, private naService: ProvinceService) { }

  // them quoc gia
  addProvince(formSignIn) {
    console.log('add....' + formSignIn.value);
    this.naService
      .addProvince(formSignIn.value)
      .subscribe((province: Province) => {
        this.provinces.push(province); // { id: '3', name: 'xcz', describe: 'xzc' } can nghien cuu
        // xoa du lieu trong form
        this.provinceName = '';
        this.provinceAddress = '';
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
