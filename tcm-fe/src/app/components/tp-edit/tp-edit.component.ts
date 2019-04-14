import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";

import { TestPlanService } from '../../testplan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { TestPlan } from '../../testplan.model';

@Component({
  selector: 'app-tp-edit',
  templateUrl: './tp-edit.component.html',
  styleUrls: ['./tp-edit.component.css']
})
export class TpEditComponent implements OnInit {
  id: String;
  testplan: any = {};
  updateForm: FormGroup;

  constructor(private tpService: TestPlanService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.tpService.getTestPlanById(this.id).subscribe(res => {
        this.testplan = res;
        this.updateForm.get('title').setValue(this.testplan.title);
        this.updateForm.get('author').setValue(this.testplan.author);
        this.updateForm.get('desc').setValue(this.testplan.desc);
        this.updateForm.get('created').setValue(formatDate(this.testplan.created, 'yyyy-MM-dd HH:mm', 'en-US'));
        this.updateForm.get('updated').setValue(formatDate(this.testplan.updated, 'yyyy-MM-dd HH:mm', 'en-US'));
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      desc: "",
      created: "",
      updated: "",
    });
  }

  updateTestPlan(title, author, desc, create, updated) {
    this.tpService.updateTestPlan(this.id, title, author, desc)
                  .subscribe(() => {
        this.snackBar.open('TestPlan update -- OK', 'OK', { duration:3000 });
        this.router.navigate(['/tp-list']);
      });
    }

}
