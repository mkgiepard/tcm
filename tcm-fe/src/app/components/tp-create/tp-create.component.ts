import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';

@Component({
  selector: 'app-tp-create',
  templateUrl: './tp-create.component.html',
  styleUrls: ['./tp-create.component.css']
})
export class TpCreateComponent implements OnInit {

  constructor(private tpService: TestPlanService) { }

  ngOnInit() {
  }

}
