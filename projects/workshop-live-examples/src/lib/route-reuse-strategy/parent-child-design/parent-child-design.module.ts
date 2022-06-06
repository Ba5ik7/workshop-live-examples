import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionOneComponent } from './solution-one/solution-one.component';
import { SolutionTwoComponent } from './solution-two/solution-two.component';



@NgModule({
  declarations: [
    SolutionOneComponent,
    SolutionTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SolutionOneComponent,
    SolutionTwoComponent
  ]
})
export class ParentChildDesignModule { }
