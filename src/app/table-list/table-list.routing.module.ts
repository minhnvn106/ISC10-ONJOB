
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationListComponent } from './nation-managerment/nation-list.component';
import { CertypeListComponent } from './certype-management/certype-list.component';
import { DegreeListComponent } from './degree-management/degree-list.component';
import { ProvinceListComponent } from './province-management/province-list.component';
import { RecordListComponent } from './record-management/record-list.component';
import { ShiftListComponent } from './shift-management/shift-list.component';


const routes: Routes = [
    { path: 'nation-managerment', component: NationListComponent },
    { path: 'employee-type-managerment', component: NationListComponent },
    { path: 'certype-management', component: CertypeListComponent },
    { path: 'degree-management', component: DegreeListComponent },
    { path: 'province-management', component: ProvinceListComponent },
    { path: 'record-management', component: RecordListComponent },
    { path: 'shift-management', component: ShiftListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableListRoutesModule { }
