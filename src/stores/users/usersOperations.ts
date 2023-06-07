import api from 'api'
import { AppThunk } from "../store";
import { getUserRequest, getUsersSuccess, getUsersError, setUsersPagination } from './usersActions'
import { IUsersRequest } from "interfaces/user";

export const handleUsersGet = (page: number): AppThunk => dispatch => {
  dispatch(getUserRequest());
  api.users.get(page)
    .then(res => {
      if ( !res.data.success ) return;
      const data: IUsersRequest = res.data;
      dispatch(getUsersSuccess(data.users));
      dispatch(setUsersPagination({
        nextLink: data.links.next_url,
        prevLink: data.links.prev_url,
        totalUsers: data.total_users,
        page: page,
      }));

    })
    .catch(err => dispatch(getUsersError(err.message)));
};

export const handleUsersMore = (page: number): AppThunk => dispatch => {
  dispatch(getUserRequest());
  dispatch(setUsersPagination({ page }));
  dispatch(handleUsersGet(page));
};
