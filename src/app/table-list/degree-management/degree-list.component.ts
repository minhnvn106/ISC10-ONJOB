import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DegreeService } from './degree.service';
import { Degree } from './Degree';

@Component({
  selector: 'degree-table-list',
  templateUrl: './degree-list.component.html',
  providers: [DegreeService]
})

export class DegreeListComponent implements OnInit {
  degrees: Degree[] = Degree.degrees;
  editId = -1;
  editNaName = '';
  editNaDes = '';

  @ViewChild('editNaNameIn') editNaNameIn: ElementRef;

  constructor(private naService: DegreeService) { }

  ngOnInit() {
    // lay danh sach quoc gia----------------------------------
    this.naService.getDegrees().subscribe((data: Degree[]) => {
      this.degrees = data;
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
    this.naService.updateDegree(editForm.value).subscribe((aDegree: Degree) => {
      // cap nhat danh sach quoc gia sau khi sua
      this.degrees.forEach(element => {
        if (element.Deg_id === aDegree.Deg_id) {
          element.Deg_name = aDegree.Deg_name;
          element.Deg_describe = aDegree.Deg_describe;
        }
      });
      // dat lai
      this.editId = -1;
    });
  }

  // xoa quoc gia ------------------------------------------------
  delete(Deg_id) {
    this.naService.deleteDegree(Deg_id).subscribe();
    // cap nhat danh sach quoc gia sau khi xoa
    this.degrees.forEach((element, index) => {
      if (element.Deg_id === Deg_id) {
        this.degrees.splice(index, 1);
      }
    });
  }

}

