import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProvinceService } from './province.service';
import { Province } from './Province';

@Component({
  selector: 'province-table-list',
  templateUrl: './province-list.component.html',
  providers: [ProvinceService]
})

export class ProvinceListComponent implements OnInit {
  provinces: Province[] = Province.provinces;
  editId = -1;
  editNaName = '';
  editNaDes = '';

  @ViewChild('editNaNameIn') editNaNameIn: ElementRef;

  constructor(private naService: ProvinceService) { }

  ngOnInit() {
    // lay danh sach quoc gia----------------------------------
    this.naService.getProvinces().subscribe((data: Province[]) => {
      this.provinces = data;
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
    this.naService.updateProvince(editForm.value).subscribe((aProvince: Province) => {
      // cap nhat danh sach quoc gia sau khi sua
      this.provinces.forEach(element => {
        if (element.id === aProvince.id) {
          element.Province_name = aProvince.Province_name;
          element.Province_address = aProvince.Province_address;
        }
      });
      // dat lai
      this.editId = -1;
    });
  }

  // xoa quoc gia ------------------------------------------------
  delete(id) {
    this.naService.deleteProvince(id).subscribe();
    // cap nhat danh sach quoc gia sau khi xoa
    this.provinces.forEach((element, index) => {
      if (element.id === id) {
        this.provinces.splice(index, 1);
      }
    });
  }

}

