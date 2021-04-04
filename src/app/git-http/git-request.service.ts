import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class GitRequestService {
  user: Users;

  constructor(private http: HttpClient) {
    this.user = new Users('', '', '', '', 0, 0, 0, new Date());
  }

  gitRequest() {
    interface ApiResponse {
      name: string;
      login: string;
      bio: string;
      avatar_url: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
    }
    let promise = new Promise((resolve: any, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          (response) => {
            this.user.name = response.name;
            this.user.login = response.login;
            this.user.bio = response.bio;
            this.user.avatar_url = response.avatar_url;
            this.user.public_repos = response.public_repos;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.created_at = response.created_at;

            resolve();
          },
          (error) => {
            this.user.login = 'An error was encountered';
            this.user.bio = 'An error was encountered';
            // this.user.profile_url = 'An error was encountered';

            reject(error);
          }
        );
    });
    return promise;
  }
}
