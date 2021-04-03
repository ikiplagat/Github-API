import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';

@Injectable({
  providedIn: 'root',
})
export class GitRequestService {
  user: Users;

  constructor(private http: HttpClient) {
    this.user = new Users('', '');
  }

  gitRequest() {
    interface ApiResponse {
      username: string;
      bio: string;
    }
    let promise = new Promise((resolve:any, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          (response) => {
            this.user.username = response.username;
            this.user.bio = response.bio;

            resolve();
          },
          (error) => {
            this.user.username = 'An error was encountered';
            this.user.bio = 'An error was encountered';

            reject(error);
          }
        );
    });
    return promise;
  }
}
