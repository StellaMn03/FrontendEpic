export interface IUser {
  id: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  cover: string;
  picture: string;
  followers: IUser[];
  following: IUser[];
}

export interface IResponse {
  status: string;
  message: string;
  payload: unknown;
  user?: IUser;
}
export type IAuth = Pick<IUser, "login" | "password">;

export interface IContext {
  user: null | IUser;
  setData: (data: IUser) => void;
}
export type IUpdateLog = Pick<IUser, "login" | "password">;
export interface IUpdatePwd {
  old: string;
  newpwd: string;
}
