import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../../testplan.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tp-create',
  templateUrl: './tp-create.component.html',
  styleUrls: ['./tp-create.component.css']
})
export class TpCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private tpService: TestPlanService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      desc: "",
    });
}

ngOnInit() {
}

addTestPlan(title, author, desc) {
  this.tpService.addTestPlan(title, author, desc)
                .subscribe(() => {
                  this.router.navigate(['/tp-list']);
                });
  }

}
