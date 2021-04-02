import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from '../users';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  user: Users;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    interface ApiResponse {
      username: string;
      bio: string;
    }
    this.http.get<ApiResponse>('https://api.github.com').subscribe((data) => {
      
      this.user = new Users(data.username, data.bio);
    });
  }
}
