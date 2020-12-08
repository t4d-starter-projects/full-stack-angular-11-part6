
export class CurrentUser {

  public username: string;
  public userKind: string;
  public displayName: string;
  public roles: string[];

  constructor(username: string, userKind: string, displayName: string) {
    this.username = username;
    this.userKind = userKind;
    this.displayName = displayName;
    this.roles = [];
  }

}