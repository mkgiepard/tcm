import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';

@Component({
  selector: 'app-tp-edit',
  templateUrl: './tp-edit.component.html',
  styleUrls: ['./tp-edit.component.css']
})
export class TpEditComponent implements OnInit {

  constructor(private tpService: TestPlanService) { }

  ngOnInit() {
  }

}
