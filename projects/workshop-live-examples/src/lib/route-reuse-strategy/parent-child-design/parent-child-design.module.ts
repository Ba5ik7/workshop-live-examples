import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionOneComponent } from './solution-one/solution-one.component';
import { SolutionTwoComponent } from './solution-two/solution-two.component';
import { SolutionThreeComponent } from './solution-three/solution-three.component';



@NgModule({
  declarations: [
    SolutionOneComponent,
    SolutionTwoComponent,
    SolutionThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SolutionOneComponent,
    SolutionTwoComponent,
    SolutionThreeComponent
  ]
})
export class ParentChildDesignModule { }
