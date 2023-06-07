import { axiosPublic, axiosPrivate } from './axios';

export enum EApiPath {
  USERS = '/users',
  USER_POSITIONS = '/positions',
  USER_TOKEN = '/token',
}

export const positions = {
  get: async () => {
    return await axiosPublic.get(EApiPath.USER_POSITIONS);
  }
}

export const token = {
  get: async () => {
    return await axiosPublic.get(EApiPath.USER_TOKEN);
  }
}

export const users = {
  get: async (page: number, count: number = 6) => {
    return await axiosPublic.get(`${EApiPath.USERS}?page=${page}&count=${count}`)
  },
  getPositions: async () => {
    return await axiosPublic.get(EApiPath.USER_POSITIONS);
  },
  post: async (data: FormData) => {
    return axiosPrivate.post(EApiPath.USERS, data);
  }
}
