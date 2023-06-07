import { EActionTypes } from "../actionType";
import { combineReducers } from "redux";
import { IUserPosition } from "interfaces/user";

const positionsReducer = (state: IUserPosition[] = [], {
  type,
  payload
}: { type: EActionTypes, payload: IUserPosition[] }) => {
  switch (type) {
    case EActionTypes.GET_USER_POSITION_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (state: boolean = false, { type }: { type: EActionTypes }) => {
  switch (type) {
    case EActionTypes.GET_USER_POSITION_REQUEST:
      return true;

    case EActionTypes.GET_USER_POSITION_SUCCESS:
    case EActionTypes.GET_USER_POSITION_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  positions: positionsReducer,
  loading: loadingReducer,
});
