import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/**
 * @title Solution One
 */
@Component({
  selector: 'lib-solution-one',
  templateUrl: './solution-one.component.html',
  styleUrls: ['./solution-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolutionOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
