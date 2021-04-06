import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRequestService } from '../git-http/git-request.service';

import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: Users;
  repositories: any;
  newSearch: string = '';

  constructor(
    private http: HttpClient,
    private gitService: GitRequestService
  ) {}

  ngOnInit() {
    this.newSearch = 'kasparov-creat';
    this.gitService.gitRequest(this.newSearch);
    this.user = this.gitService.user;
    this.newSearch = '';
  }
  getUser() {
    this.gitService.gitRequest(this.newSearch);
    this.user = this.gitService.user;

    console.log(this.newSearch);
  }
  getRepo(username: string) {
    this.gitService.getUserRepo(username);
    this.repositories = this.gitService.repository;
    console.log(username);
  }
}
