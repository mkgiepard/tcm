import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { TestCase } from '../../testcase.model';


@Component({
  selector: 'app-tc-edit',
  templateUrl: './tc-edit.component.html',
  styleUrls: ['./tc-edit.component.css']
})
export class TcEditComponent implements OnInit {
  id: String;
  testcase: any = {};
  updateForm: FormGroup;

  constructor(private tcService: TestCaseService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.tcService.getTestCaseById(this.id).subscribe(res => {
        this.testcase = res;
        this.updateForm.get('title').setValue(this.testcase.title);
        this.updateForm.get('author').setValue(this.testcase.author);
        this.updateForm.get('desc').setValue(this.testcase.desc);
        this.updateForm.get('priority').setValue(this.testcase.priority);
        this.updateForm.get('status').setValue(this.testcase.status);
        this.updateForm.get('testplan_id').setValue(this.testcase.testplan_id);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      desc: "",
      priority: "",
      status: "",
      testplan_id: "",
    });
  }

  updateTestCase(title, author, desc, priority, status) {
    this.tcService.updateTestCase(this.id, title, author, desc, priority, status, this.testcase.testplan_id)
                  .subscribe(() => {
        this.snackBar.open('TestCase update -- OK', 'OK', { duration:3000 });
        this.router.navigate(['/tp-view/' + this.testcase.testplan_id]);
      });
  }

  backToTpView() {
    this.router.navigate(['/tp-view/' + this.testcase.testplan_id]);
  }
}
