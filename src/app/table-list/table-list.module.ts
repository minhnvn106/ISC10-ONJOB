import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NationListComponent } from './nation-managerment/nation-list.component';
import { NationModalComponent } from './nation-managerment/nation-modal.component';

import { ShiftListComponent } from './shift-management/shift-list.component';
import { ShiftModalComponent } from './shift-management/shift-modal.component';

import { RecordListComponent } from './record-management/record-list.component';
import { RecordModalComponent } from './record-management/record-modal.component';

import { CertypeListComponent } from './certype-management/certype-list.component';
import { CerTypeModalComponent } from './certype-management/certype-modal.component';

import { DegreeListComponent } from './degree-management/degree-list.component';
import { DegreeModalComponent } from './degree-management/degree-modal.component';

import { ProvinceListComponent } from './province-management/province-list.component';
import { ProvinceModalComponent } from './province-management/province-modal.component';
import { TableListRoutesModule } from './table-list.routing.module';
import { ConfirmComponent } from './confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableListRoutesModule
  ],
  declarations: [
    NationListComponent,
    NationModalComponent,
    ConfirmComponent,
    CertypeListComponent,
    CerTypeModalComponent,
    ShiftListComponent,
    ShiftModalComponent,
    RecordListComponent,
    RecordModalComponent,
    DegreeListComponent,
    DegreeModalComponent,
    ProvinceListComponent,
    ProvinceModalComponent
  ],
  exports: [
    NationListComponent,
    NationModalComponent,
    ConfirmComponent,
    CertypeListComponent,
    CerTypeModalComponent,
    ShiftListComponent,
    ShiftModalComponent,
    RecordListComponent,
    RecordModalComponent,
    DegreeListComponent,
    DegreeModalComponent,
    ProvinceListComponent,
    ProvinceModalComponent
  ]
})
export class TableListModule { }
