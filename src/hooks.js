import { useContext } from 'react';
import { ActionsContext, PostsContext, UsersContext } from './context';

export const useActions = () => {
  return useContext(ActionsContext);
};

export const useUsers = () => {
  return useContext(UsersContext);
};

export const usePosts = () => {
  return useContext(PostsContext);
};
