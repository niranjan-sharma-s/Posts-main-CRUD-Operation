import { Reducer } from "redux";
import { actionTypes } from "../actions/actionTypes";
export interface ACTIONTYPE {
  type: actionTypes;
  payload?: IPost | IPost[];
}
export interface IPostState {
  loading: boolean;
  posts?: IPost[];
  error?: boolean;
}

export interface IPost {
  title?: string;
  description?: string;
  id?: number;
}

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: undefined,
};

export const reducer: Reducer<IPostState> = (
  state: IPostState = initialState,
  action: ACTIONTYPE
): IPostState => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_POSTS_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        posts: payload as IPost[],
      };

    case actionTypes.GET_POSTS_FAILED:
    case actionTypes.EDIT_POST_FAILED:
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.EDIT_POST:
    case actionTypes.ADD_POST:
      return {
        ...state,
        loading: false,
        posts: payload as IPost[],
      };

    case actionTypes.EDIT_POST_SUCCESSFUL:
    case actionTypes.ADD_POST_SUCCESSFUL:
      return {
        ...state,
        posts:payload as IPost[]
      };

    default:
      return state;
  }
};
