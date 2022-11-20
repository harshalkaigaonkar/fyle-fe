import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  NEXT_PAGE,
  PREV_PAGE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: action.payload.page,
        repos: action.payload.data,
        loading: false
      }
    case PREV_PAGE:
      return {
        ...state,
        page: action.payload.page,
        repos: action.payload.data,
        loading: false
      }
    default:
      return state;
  }
};
