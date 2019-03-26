import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';

@Component({
  selector: 'app-tc-edit',
  templateUrl: './tc-edit.component.html',
  styleUrls: ['./tc-edit.component.css']
})
export class TcEditComponent implements OnInit {

  constructor(private tcService: TestCaseService) { }

  ngOnInit() {
  }

}
