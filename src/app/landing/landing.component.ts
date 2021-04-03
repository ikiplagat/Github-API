import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRequestService } from '../git-http/git-request.service';

import { Users } from '../users';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  user: Users;
  repositories: Repositories;

  constructor(
    private http: HttpClient,
    private gitService: GitRequestService
  ) {}

  ngOnInit() {
    this.gitService.gitRequest();
    this.user = this.gitService.user;
  }
}
