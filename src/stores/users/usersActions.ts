import { EActionTypes } from "../actionType";
import { IUser, IUserPagination } from "interfaces/user";

interface IGetUsersRequest {
  type: EActionTypes.GET_USERS_REQUEST;
}

interface IGetUsersSuccess {
  type: EActionTypes.GET_USERS_SUCCESS;
  payload: IUser[];
}

interface IGetUsersPagination {
  type: EActionTypes.SET_USERS_PAGINATION;
  payload: IUserPagination;
}

interface IGetUsersError {
  type: EActionTypes.GET_USERS_ERROR,
  payload: string
}

export const getUserRequest = (): IGetUsersRequest => ( {
  type: EActionTypes.GET_USERS_REQUEST,
} );

export const getUsersSuccess = (users: IUser[]): IGetUsersSuccess => ( {
  type: EActionTypes.GET_USERS_SUCCESS,
  payload: users
} );

export const getUsersError = (error: string): IGetUsersError => ( {
  type: EActionTypes.GET_USERS_ERROR,
  payload: error
} );

export const setUsersPagination = (pagination: IUserPagination): IGetUsersPagination => ( {
  type: EActionTypes.SET_USERS_PAGINATION,
  payload: pagination
} );


export type UsersAsyncTypes = IGetUsersRequest | IGetUsersSuccess | IGetUsersError;
