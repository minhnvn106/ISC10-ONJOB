import { Component, OnInit, ViewChild } from '@angular/core';
import { NationService } from './nation.service';
import { Nation } from './nation';

@Component({
  selector: 'nation-table-list',
  templateUrl: './nation-list.component.html',
  providers: [NationService]
})

export class NationListComponent implements OnInit {
  nations: Nation[] = Nation.nations;

  constructor(private naService: NationService) { }

  ngOnInit() {
    // lay danh sach quoc gia
    this.naService.getNations().subscribe((data: Nation[]) => {
      this.nations = data;
    });
  }

  check() {

  }

}

