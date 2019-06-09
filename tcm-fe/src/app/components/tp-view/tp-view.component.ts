import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { TestPlan } from '../../testplan.model';
import { TestCase } from '../../testcase.model';

@Component({
  selector: 'app-tp-view',
  templateUrl: './tp-view.component.html',
  styleUrls: ['./tp-view.component.css']
})
export class TpViewComponent implements OnInit {
  tp_id: String;
  tp: any = [];
  tcs: TestCase[];
  tpColumns = ['title', 'author', 'desc', 'created', 'updated'];
  tcColumns = ['title', 'author', 'desc', 'priority', 'status'];
  
  constructor(private tpService: TestPlanService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tp_id = params.id;
      this.tpService.getTestPlanById(this.tp_id).subscribe(res => {
        this.tp = [res];
      });
    })
    this.fetchTestCases();
  }
  fetchTestCases() {
    this.tpService
      .getTestCasesForTestPlanById(this.tp_id)
      .subscribe((data: TestCase[]) => {
        this.tcs = data;
        console.log(this.tcs);
      });
  }

}
