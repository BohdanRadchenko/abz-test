import api from 'api'
import { AppThunk } from "../store";
import { IUserTokenRequest } from "interfaces/user";
import storage from "api/storage";
import {
  getUserTokenRequest,
  getUserTokenSuccess,
  getUserTokenError,
  postUserRegisterRequest,
  postUserRegisterError,
  postUserRegisterSuccess
} from './userActions'

export const handleUserTokenGet = (): AppThunk => dispatch => {
  dispatch(getUserTokenRequest());
  api.token.get()
    .then(res => {
      if ( !res.data.success ) {
        return dispatch(getUserTokenError(res.data.message));
      }
      const data: IUserTokenRequest = res.data;
      storage.token.set(data.token)
      dispatch(getUserTokenSuccess(data.token));

    })
    .catch(err => dispatch(getUserTokenError(err?.message)));
};

export const handleUserRegisterPost = (data: FormData): AppThunk => dispatch => {
  dispatch(postUserRegisterRequest());
  api.users.post(data)
    .then(res => {
      if ( !res.data.success ) {
        return dispatch(postUserRegisterError(res.data.message));
      }
      dispatch(postUserRegisterSuccess());

    })
    .catch(err => dispatch(postUserRegisterError(err?.message)));
};

