import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tc-create',
  templateUrl: './tc-create.component.html',
  styleUrls: ['./tc-create.component.css']
})
export class TcCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private tcService: TestCaseService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      desc: "",
      priority: "",
    });
  }

  ngOnInit() {
  }

  addTestCase(title, author, desc, priority) {
    this.tcService.addTestCase(title, author, desc, priority)
                  .subscribe(() => {
                    this.router.navigate(['/tc-list']);
                  });
  }

}
