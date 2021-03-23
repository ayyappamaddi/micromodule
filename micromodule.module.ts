import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroComponent } from './micro/micro.component';



@NgModule({
  declarations: [MicroComponent],
  imports: [
    CommonModule
  ],
  exports: [MicroComponent]
})
export class MicromoduleModule { }
