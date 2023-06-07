export interface IUser {
  id: number,
  name: string;
  email: string;
  "phone": string;
  "position": string;
  "photo": string;
}


export interface IUsersRequest {
  links: {
    next_url: string,
    prev_url: string,
  };
  total_users: number;
  users: IUser[];
}

export interface IUserPagination {
  nextLink?: string;
  prevLink?: string;
  totalUsers?: number;
  page: number;
}

export interface IUserPosition {
  id: number,
  name: string;
}

export interface IUserPositionRequest {
  positions: IUserPosition[];
}

export interface IUserTokenRequest {
  token: string;
}
