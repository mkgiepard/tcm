import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestCaseService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getTestCases() {
    return this.http.get('${this.uri}/testcases');
  }

  getTestCaseById(id) {
    return this.http.get('${this.uri}/testcases/${id}');
  }

  addTestCase(title, author, desc, priority) {
    const testcase = {
      title: title,
      author: author,
      desc: desc,
      priority: priority
    }
    return this.http.post('${this.uri}/testcases/add', testcase);
  }

  updateTestCase(id, title, author, desc, priority, status) {
    const testcase = {
      title: title,
      author: author,
      desc: desc,
      priority: priority,
      status: status
    }
    return this.http.post('${this.uri}/testcases/update/${id}', testcase);
  }

  deleteTestCase(id) {
    return this.http.get('${this.uri}/testcases/delete/${id}');
  }
}
