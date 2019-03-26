import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';

@Component({
  selector: 'app-tc-create',
  templateUrl: './tc-create.component.html',
  styleUrls: ['./tc-create.component.css']
})
export class TcCreateComponent implements OnInit {

  constructor(private tcService: TestCaseService) { }

  ngOnInit() {
  }

}
