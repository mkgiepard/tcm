import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';

@Component({
  selector: 'app-tp-list',
  templateUrl: './tp-list.component.html',
  styleUrls: ['./tp-list.component.css']
})
export class TpListComponent implements OnInit {

  constructor(private tpService: TestPlanService) { }

  ngOnInit() {
  }

}
