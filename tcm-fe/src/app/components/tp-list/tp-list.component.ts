import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { TestPlan } from '../../testplan.model';

@Component({
  selector: 'app-tp-list',
  templateUrl: './tp-list.component.html',
  styleUrls: ['./tp-list.component.css']
})
export class TpListComponent implements OnInit {
  testplans: TestPlan[];
  displayedColumns = ['title', 'author', 'desc', 'created', 'updated', 'actions'];

  constructor(private tpService: TestPlanService, private router: Router) { }

  ngOnInit() {
    this.fetchTestPlans();
  }

  fetchTestPlans() {
    this.tpService
      .getTestPlans()
      .subscribe((data: TestPlan[]) => {
        this.testplans = data;
        console.log('Data requested...');
        console.log(this.testplans);
      });
  }

  editTestPlan(id) {
    this.router.navigate([`/tp-edit/${id}`]);
  }

  deleteTestPlan(id) {
    this.tpService.deleteTestPlan(id).subscribe(() => {
      this.fetchTestPlans();
    });
  }

}
