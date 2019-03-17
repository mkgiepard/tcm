import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';

@Component({
  selector: 'app-tc-list',
  templateUrl: './tc-list.component.html',
  styleUrls: ['./tc-list.component.css']
})
export class TcListComponent implements OnInit {

  constructor(private tcService: TestCaseService) { }

  ngOnInit() {
    this.tcService.getTestCases().subscribe((testcases) => {
      console.log(testcases);
    });
  }
}
