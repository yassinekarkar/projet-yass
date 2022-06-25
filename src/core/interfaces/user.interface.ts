export interface IUser {
  firstname: string;
  lastname: string;
  mail: string;
  token: string;
  code ?: ''
}

export interface IUserAuth {
  status: string;
  messages: [];
  "results": {
    "jwt": string;
    "expire_in": number
  }
}
