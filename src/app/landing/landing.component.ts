import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRequestService } from '../git-http/git-request.service';
import { Router } from '@angular/router';

import { Users } from '../users';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  user: Users;
  repositories: any;
  username: any;
  newSearch: string;

  constructor(
    private http: HttpClient,
    private gitService: GitRequestService,
    private router: Router
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
