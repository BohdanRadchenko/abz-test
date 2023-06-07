import { EActionTypes } from "../actionType";

interface IGetUserTokenRequest {
  type: EActionTypes.GET_USER_TOKEN_REQUEST;
}

interface IGetUserTokenSuccess {
  type: EActionTypes.GET_USER_TOKEN_SUCCESS;
  payload: string;
}

interface IGetUserTokenError {
  type: EActionTypes.GET_USER_TOKEN_ERROR,
  payload: string
}

export const getUserTokenRequest = (): IGetUserTokenRequest => ( {
  type: EActionTypes.GET_USER_TOKEN_REQUEST,
} );

export const getUserTokenSuccess = (token: string): IGetUserTokenSuccess => ( {
  type: EActionTypes.GET_USER_TOKEN_SUCCESS,
  payload: token
} );

export const getUserTokenError = (error: string): IGetUserTokenError => ( {
  type: EActionTypes.GET_USER_TOKEN_ERROR,
  payload: error
} );


interface IPostUserRegisterRequest {
  type: EActionTypes.GET_USER_REGISTER_REQUEST;
}

interface IPostUserRegisterSuccess {
  type: EActionTypes.GET_USER_REGISTER_SUCCESS;
}

interface IPostUserRegisterError {
  type: EActionTypes.GET_USER_REGISTER_ERROR,
  payload: string,
}

export const postUserRegisterRequest = (): IPostUserRegisterRequest => ( {
  type: EActionTypes.GET_USER_REGISTER_REQUEST,
} );

export const postUserRegisterSuccess = (): IPostUserRegisterSuccess => ( {
  type: EActionTypes.GET_USER_REGISTER_SUCCESS,
} );

export const postUserRegisterError = (error: string): IPostUserRegisterError => ( {
  type: EActionTypes.GET_USER_REGISTER_ERROR,
  payload: error,
} );


export type UserAsyncTypes = IGetUserTokenRequest
  | IGetUserTokenSuccess
  | IGetUserTokenError
  | IPostUserRegisterRequest
  | IPostUserRegisterSuccess
  | IPostUserRegisterError;
