import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';

@Component({
  selector: 'app-tc-view',
  templateUrl: './tc-view.component.html',
  styleUrls: ['./tc-view.component.css']
})
export class TcViewComponent implements OnInit {

  constructor(private tcService: TestCaseService) { }

  ngOnInit() {
    // Just for testing
    this.tcService.getTestCases().subscribe((testcases) => {
      console.log(testcases);
    });
  }
}
