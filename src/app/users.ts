export class Users {
  constructor(
    public name: string,
    public login: string,
    public bio: string,
    public avatar_url: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public created_at: Date,
  ) {}
}
