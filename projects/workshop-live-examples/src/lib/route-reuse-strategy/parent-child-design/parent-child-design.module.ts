import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionOneComponent } from './solution-one/solution-one.component';



@NgModule({
  declarations: [
    SolutionOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SolutionOneComponent
  ]
})
export class ParentChildDesignModule { }
