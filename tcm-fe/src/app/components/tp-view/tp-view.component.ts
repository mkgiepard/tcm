import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';

@Component({
  selector: 'app-tp-view',
  templateUrl: './tp-view.component.html',
  styleUrls: ['./tp-view.component.css']
})
export class TpViewComponent implements OnInit {

  constructor(private tpService: TestPlanService) { }

  ngOnInit() {
  }

}
