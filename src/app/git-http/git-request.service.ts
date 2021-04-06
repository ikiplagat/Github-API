import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';
import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root',
})
export class GitRequestService {
  repo: any;
  getUser(search: any) {
    throw new Error('Method not implemented.');
  }
  user: Users;
  repository: any;

  constructor(private http: HttpClient) {
    this.user = new Users('', '', '', '', 0, 0, 0, new Date(), '');
    // this.repository = new Repositories('');
  }

  gitRequest(username: string) {
    interface ApiResponse {
      name: string;
      login: string;
      bio: string;
      avatar_url: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
      html_url: string;
      repos: any;
    }
    let promise = new Promise((resolve: any, reject) => {
      this.http
        .get<ApiResponse>(`${environment.apiUrl}users/${username}`)
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
            this.user.html_url = response.html_url;
            if (response.public_repos > 0) {
              this.repository = this.getUserRepo(response.login);
              resolve();
            }
            console.log(response);

            resolve();
          },
          (error) => {
            this.user.login = 'User not found';

            reject(error);
          }
        );
    });
    return promise;
  }
  getUserRepo(username: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(`${environment.apiUrl}users/${username}/repos`)
        .toPromise()
        .then(
          (response) => {
            this.repository = response;
            console.log(response);
            resolve();
          },
          (error) => {
            console.log(error);
          }
        );
    });
    return promise;
  }
  getRepo(repository: string) {
    interface ApiResponse {
      items: Repositories[];
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(
          `${environment.apiUrl}search/repositories?per_page=500&q=${repository}`
        )
        .toPromise()
        .then(
          (response) => {
            this.repository = response.items;
            console.log(response);

            if (response.items.length == 0) {
              alert('There are no repository with such name');
            }
            resolve();
          },
          (error) => {
            alert(error.error.message);
          }
        );
    });
    return promise;
  }
}
