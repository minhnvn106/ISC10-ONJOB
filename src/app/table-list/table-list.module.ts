import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NationListComponent } from './nation-managerment/nation-list.component';
import { NationModalComponent } from './nation-managerment/nation-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
     ],
    declarations: [
         NationListComponent,
         NationModalComponent
    ],
    exports: [
        NationListComponent,
        NationModalComponent
    ]
  })
export class TableListModule {}
