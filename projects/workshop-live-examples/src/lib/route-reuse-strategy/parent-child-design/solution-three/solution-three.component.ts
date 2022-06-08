import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/**
 * @title Solution Three
 */
@Component({
  selector: 'lib-solution-three',
  templateUrl: './solution-three.component.html',
  styleUrls: ['./solution-three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolutionThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
