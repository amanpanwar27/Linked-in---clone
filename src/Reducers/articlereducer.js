import { GET_ARTICLES } from "../actions/Actiontype";
export const initstate = {
  articles: [],
};

const articleReducer = (state = initstate, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
export default articleReducer;
