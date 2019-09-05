import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NationService } from './nation.service';
import { Nation } from './nation';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'nation-table-list',
  templateUrl: './nation-list.component.html',
  providers: [NationService]
})

export class NationListComponent implements OnInit {
  nations: Nation[] = Nation.nations;
  editId = -1;
  editNaName = '';
  editNaDes = '';

  // @ViewChild('editNaNameIn') editNaNameIn: ElementRef;

  constructor(
    private naService: NationService,
    private ngxNotification: NgxNotificationService
  ) {

  }

  ngOnInit() {
    // lay danh sach quoc gia----------------------------------
    this.naService.getNations().subscribe((data: Nation[]) => {
      this.nations = data;
    });
  }

  // sua quoc gia ---------------------------------------------
  editClick(editId) {
    this.editId = editId;
  }

  isEditForm(editId, editNaName, editNaDes) {
    if (this.editId === editId) {
      this.editNaName = editNaName;
      this.editNaDes = editNaDes;
      return true;
    }
    return false;
  }

  editCancel() {
    this.editId = -1;
  }

  editSubmit(editForm) {
    console.log(editForm.value);
    
    this.naService.updateNation(editForm.value).subscribe((aNation: Nation) => {
      // cap nhat danh sach quoc gia sau khi sua
      this.nations.forEach(element => {
        if (element.nation_id === aNation.nation_id) {
          element.nation_name = aNation.nation_name;
          element.nation_describe = aNation.nation_describe;
        }
      });
      // dat lai
      this.editId = -1;
      // thong bao thanh cong
      this.ngxNotification.sendMessage('Sửa thành công', 'success', 'top-right');
    });
  }

  // xoa quoc gia ------------------------------------------------
  delete(nation_id) {
    this.naService.deleteNation(nation_id).subscribe();
    // cap nhat danh sach quoc gia sau khi xoa
    this.nations.forEach((element, index) => {
      if (element.nation_id === nation_id) {
        this.nations.splice(index, 1);
      }
    });
    // thong bao
    this.ngxNotification.sendMessage('Xóa thành công', 'success', 'top-right');
  }

}

