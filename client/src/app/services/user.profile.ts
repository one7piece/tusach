
export class UserProfile {

  constructor(private _user: string,
    private _emailAddress: string,
    private _role: string,
    private _expiredTime: number) {
  }

  get user() : string {
    return this._user;
  }
  
  get role() : string {
    return this._role;
  }
    
  get emailAddress() : string {
    return this._emailAddress;
  }

  get expiredTime() : number {
    return this._expiredTime;
  }
}