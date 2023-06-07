import { EActionTypes } from "../actionType";
import { IUserPosition } from "interfaces/user";

interface IGetUserPositionsRequest {
  type: EActionTypes.GET_USER_POSITION_REQUEST;
}

interface IGetUserPositionsSuccess {
  type: EActionTypes.GET_USER_POSITION_SUCCESS;
  payload: IUserPosition[];
}

interface IGetUserPositionsError {
  type: EActionTypes.GET_USER_POSITION_ERROR,
  payload: string
}

export const getUserPositionsRequest = (): IGetUserPositionsRequest => ( {
  type: EActionTypes.GET_USER_POSITION_REQUEST,
} );

export const getUserPositionsSuccess = (positions: IUserPosition[]): IGetUserPositionsSuccess => ( {
  type: EActionTypes.GET_USER_POSITION_SUCCESS,
  payload: positions
} );

export const getUserPositionsError = (error: string): IGetUserPositionsError => ( {
  type: EActionTypes.GET_USER_POSITION_ERROR,
  payload: error
} );

export type UserPositionAsyncTypes = IGetUserPositionsRequest | IGetUserPositionsSuccess | IGetUserPositionsError;
