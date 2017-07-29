import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdSnackBarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdSnackBarModule
  ],
})
export class MaterialModule { }