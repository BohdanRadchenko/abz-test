import api from 'api'
import { AppThunk } from "../store";
import { getUserPositionsRequest, getUserPositionsError, getUserPositionsSuccess } from './positionsActions'
import { IUserPositionRequest } from "interfaces/user";

export const handleUserPositionsGet = (): AppThunk => dispatch => {
  dispatch(getUserPositionsRequest());
  api.positions.get()
    .then(res => {
      if ( !res.data.success ) {
        return dispatch(getUserPositionsError(res.data.message));
      }
      const data: IUserPositionRequest = res.data;
      dispatch(getUserPositionsSuccess(data.positions));

    })
    .catch(err => dispatch(getUserPositionsError(err?.message)));
};
