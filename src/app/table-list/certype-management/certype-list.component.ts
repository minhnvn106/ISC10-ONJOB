import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CerTypeService } from './certype.service';
import { CerType } from './CerType';

@Component({
  selector: 'certype-table-list',
  templateUrl: './certype-list.component.html',
  providers: [CerTypeService]
})

export class CertypeListComponent implements OnInit {
  certypes: CerType[] = CerType.certypes;
  editId = -1;
  editCeName = '';
  editCeFld = '';

  @ViewChild('editCeNameIn') editCeNameIn: ElementRef;

  constructor(private ceService: CerTypeService) { }

  ngOnInit() {
    // lay danh sach quoc gia----------------------------------
    this.ceService.getCerTypes().subscribe((data: CerType[]) => {
      this.certypes = data;
    });
  }

  // sua quoc gia ---------------------------------------------
  editClick(editId) {
    this.editId = editId;
  }

  isEditForm(editId, editCeName, editCeFld) {
    if (this.editId === editId) {
      this.editCeName = editCeName;
      this.editCeFld = editCeFld;
      return true;
    }
    return false;
  }

  editCancel() {
    this.editId = -1;
  }

  editSubmit(editForm) {
    this.ceService.updateCerType(editForm.value).subscribe((aCertype: CerType) => {
      // cap nhat danh sach quoc gia sau khi sua
      this.certypes.forEach(element => {
        if (element.id === aCertype.id) {
          element.CerType_name = aCertype.CerType_name;
          element.CerType_field = aCertype.CerType_field;
        }
      });
      // dat lai
      this.editId = -1;
    });
  }

  // xoa quoc gia ------------------------------------------------
  delete(id) {
    this.ceService.deleteCerType(id).subscribe();
    // cap nhat danh sach quoc gia sau khi xoa
    this.certypes.forEach((element, index) => {
      if (element.id === id) {
        this.certypes.splice(index, 1);
      }
    });
  }

}

