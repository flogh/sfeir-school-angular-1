import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  person: any = {};

  constructor(private readonly http: HttpClient) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.http.get(`${BASE_URL}/api/people/`).subscribe(people => (this.person = people[0]));
  }

  /**
   * Returns random people
   */
  random() {
    this.http.get(`${BASE_URL}/api/people/random`).subscribe(person => (this.person = person));
  }
}