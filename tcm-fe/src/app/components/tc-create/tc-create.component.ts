import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../../testcase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tc-create',
  templateUrl: './tc-create.component.html',
  styleUrls: ['./tc-create.component.css']
})
export class TcCreateComponent implements OnInit {
  createForm: FormGroup;
  tp_id: String;

  constructor(private tcService: TestCaseService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      desc: "",
      priority: "",
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tp_id = params.id;
    });
  }

  addTestCase(title, author, desc, priority) {
    if (this.tp_id == null) {
      console.log("Error: Cannot create a test case without a test plan parent.");
      return;
    }
    this.tcService.addTestCase(title, author, desc, priority, this.tp_id)
                  .subscribe(() => {
                    this.router.navigate(['/tp-view/' + this.tp_id]);
                  });
  }

}
