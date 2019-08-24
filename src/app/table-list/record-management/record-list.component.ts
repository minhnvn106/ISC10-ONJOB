import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecordService } from './record.service';
import { Record } from './Record';

@Component({
  selector: 'record-table-list',
  templateUrl: './record-list.component.html',
  providers: [RecordService]
})

export class RecordListComponent implements OnInit {
  records: Record[] = Record.records;
  editId = -1;
  editNaName = '';
  editNaDes = '';

  @ViewChild('editNaNameIn') editNaNameIn: ElementRef;

  constructor(private naService: RecordService) { }

  ngOnInit() {
    // lay danh sach quoc gia----------------------------------
    this.naService.getRecords().subscribe((data: Record[]) => {
      this.records = data;
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
    this.naService.updateRecord(editForm.value).subscribe((aRecord: Record) => {
      // cap nhat danh sach quoc gia sau khi sua
      this.records.forEach(element => {
        if (element.id === aRecord.id) {
          element.RecType_name = aRecord.RecType_name;
          element.RecType_describe = aRecord.RecType_describe;
        }
      });
      // dat lai
      this.editId = -1;
    });
  }

  // xoa quoc gia ------------------------------------------------
  delete(id) {
    this.naService.deleteRecord(id).subscribe();
    // cap nhat danh sach quoc gia sau khi xoa
    this.records.forEach((element, index) => {
      if (element.id === id) {
        this.records.splice(index, 1);
      }
    });
  }

}

