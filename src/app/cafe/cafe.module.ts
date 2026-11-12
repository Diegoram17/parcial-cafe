import { NgModule } from '@angular/core';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@NgModule({
  imports: [CafeListComponent],
  exports: [CafeListComponent]
})
export class CafeModule { }