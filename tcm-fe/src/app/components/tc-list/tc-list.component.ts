import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { TestCase } from '../../testcase.model';


@Component({
  selector: 'app-tc-list',
  templateUrl: './tc-list.component.html',
  styleUrls: ['./tc-list.component.css']
})
export class TcListComponent implements OnInit {
  testcases: TestCase[];
  displayedColumns = ['title', 'author', 'desc', 'priority', 'status', 'actions'];
  
  constructor(private tcService: TestCaseService, private router: Router) { }

  ngOnInit() {
    this.fetchTestCases();
  }

  fetchTestCases() {
    this.tcService
      .getTestCases()
      .subscribe((data: TestCase[]) => {
        this.testcases = data;
        console.log('Data requested...');
        console.log(this.testcases);
      });
  }

  editTestCase(id) {
    this.router.navigate([`/tc-edit/${id}`]);
  }

  deleteTestCase(id) {
    this.tcService.deleteTestCase(id).subscribe(() => {
      this.fetchTestCases();
    });
  }
}
