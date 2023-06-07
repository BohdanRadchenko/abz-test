import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'
import usersReducers from "./users/usersReducers";
import { UsersAsyncTypes } from "./users/usersActions";
import positionsReducers from "./positions/positionsReducers";
import { UserPositionAsyncTypes } from "./positions/positionsActions";
import userReducers from "./user/userReducers";
import { UserAsyncTypes } from "./user/userActions";

type AsyncActionType = UsersAsyncTypes | UserPositionAsyncTypes | UserAsyncTypes;

const rootReducer = combineReducers({
  users: usersReducers,
  positions: positionsReducers,
  user: userReducers,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  AnyAction>


const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, AsyncActionType>));

export type AppDispatch = typeof store.dispatch

export default store;
