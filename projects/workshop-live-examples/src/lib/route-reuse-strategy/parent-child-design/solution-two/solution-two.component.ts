import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-solution-two',
  templateUrl: './solution-two.component.html',
  styleUrls: ['./solution-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolutionTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
