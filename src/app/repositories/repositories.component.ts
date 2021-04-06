import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  newSearch: string = '';
  repository: any;

  constructor(private gitService: GitRequestService) {
    this.repository = [];
  }
  getRepo() {
    console.log(this.newSearch);

    this.gitService.getRepo(this.newSearch).then(() => {
      this.repository = this.gitService.repository;
      console.log(this.repository);
    });
  }

  ngOnInit(): void {}
}
