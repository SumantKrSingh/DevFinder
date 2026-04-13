import axiosInstance from './axiosInstance';
import type { GithubUser } from '../types/github.types';

export const fetchGithubUser = async (
  username: string
): Promise<GithubUser> => {
  const response = await axiosInstance.get<GithubUser>(`/users/${username}`);
  return response.data;
};
