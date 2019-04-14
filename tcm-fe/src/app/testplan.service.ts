import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestPlanService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getTestPlans() {
    return this.http.get(`${this.uri}/testplans`);
  }

  getTestPlanById(id) {
    return this.http.get(`${this.uri}/testplans/${id}`);
  }

  addTestPlan(title, author, desc) {
    const testplan = {
      title: title,
      author: author,
      desc: desc
    }
    return this.http.post(`${this.uri}/testplans/add`, testplan);
  }

  updateTestPlan(id, title, author, desc) {
    const testplan = {
      title: title,
      author: author,
      desc: desc,
    }
    return this.http.post(`${this.uri}/testplans/update/${id}`, testplan);
  }

  deleteTestPlan(id) {
    return this.http.get(`${this.uri}/testplans/delete/${id}`);
  }

}
