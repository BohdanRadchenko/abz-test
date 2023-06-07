import { EActionTypes } from "../actionType";
import { combineReducers } from "redux";
import { IUser, IUserPagination } from "interfaces/user";

const paginationReducer = (state: IUserPagination = { nextLink: "", prevLink: "", page: 1, totalUsers: 0 }, {
  type,
  payload
}: { type: EActionTypes, payload: IUserPagination }) => {
  switch (type) {
    case EActionTypes.SET_USERS_PAGINATION:
      return { ...state, ...payload };

    default:
      return state;
  }
};

const usersReducer = (state: IUser[] = [], { type, payload }: { type: EActionTypes, payload: IUser[] }) => {
  switch (type) {
    case EActionTypes.GET_USERS_SUCCESS:
      return [...state, ...payload];

    default:
      return state;
  }
};

const loadingReducer = (state: boolean = false, { type }: { type: EActionTypes }) => {
  switch (type) {
    case EActionTypes.GET_USERS_REQUEST:
      return true;

    case EActionTypes.GET_USERS_SUCCESS:
    case EActionTypes.GET_USERS_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  pagination: paginationReducer,
});
