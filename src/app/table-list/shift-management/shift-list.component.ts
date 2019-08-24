import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShiftService } from './shift.service';
import { Shift } from './Shift';

@Component({
  selector: 'shift-table-list',
  templateUrl: './shift-list.component.html',
  providers: [ShiftService]
})

export class ShiftListComponent implements OnInit {
  shifts: Shift[] = Shift.shifts;
  editId = -1;
  editShType = '';
  editShDur = '';

  @ViewChild('editShTypeIn') editShTypeIn: ElementRef;

  constructor(private shService: ShiftService) { }

  ngOnInit() {
    // lay danh sach quoc gia----------------------------------
    this.shService.getShifts().subscribe((data: Shift[]) => {
      this.shifts = data;
    });
  }

  // sua quoc gia ---------------------------------------------
  editClick(editId) {
    this.editId = editId;
  }

  isEditForm(editId, editShType, editShDur) {
    if (this.editId === editId) {
      this.editShType = editShType;
      this.editShDur = editShDur;
      return true;
    }
    return false;
  }

  editCancel() {
    this.editId = -1;
  }

  editSubmit(editForm) {
    this.shService.updateShift(editForm.value).subscribe((aShift: Shift) => {
      // cap nhat danh sach quoc gia sau khi sua
      this.shifts.forEach(element => {
        if (element.id === aShift.id) {
          element.Shift_Type = aShift.Shift_Type;
          element.Shift_Duration = aShift.Shift_Duration;
        }
      });
      // dat lai
      this.editId = -1;
    });
  }

  // xoa quoc gia ------------------------------------------------
  delete(id) {
    this.shService.deleteShift(id).subscribe();
    // cap nhat danh sach quoc gia sau khi xoa
    this.shifts.forEach((element, index) => {
      if (element.id === id) {
        this.shifts.splice(index, 1);
      }
    });
  }

}

