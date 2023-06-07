import { combineReducers } from "redux";
import { EActionTypes } from "../actionType";
import { IUserPosition } from "interfaces/user";

const registerReducer = (state: { status: boolean } = { status: false }, { type }: { type: EActionTypes }) => {
  switch (type) {
    case EActionTypes.GET_USER_REGISTER_SUCCESS:
      return { ...state, status: true };

    default:
      return state;
  }
};

const tokenReducer = (state: IUserPosition[] = [], {
  type,
  payload
}: { type: EActionTypes, payload: IUserPosition[] }) => {
  switch (type) {
    case EActionTypes.GET_USER_TOKEN_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (state: boolean = false, { type }: { type: EActionTypes }) => {
  switch (type) {
    case EActionTypes.GET_USER_TOKEN_REQUEST:
    case EActionTypes.GET_USER_REGISTER_REQUEST:
      return true;

    case EActionTypes.GET_USER_TOKEN_SUCCESS:
    case EActionTypes.GET_USER_REGISTER_SUCCESS:
    case EActionTypes.GET_USER_REGISTER_ERROR:
    case EActionTypes.GET_USER_TOKEN_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  register: registerReducer,
  token: tokenReducer,
  loading: loadingReducer,
});
