import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";

import common from "./common"

const rootReducer = (state, action) => {
  switch (action) {
    case HYDRATE:
      return action.payload;
    default:
      const combineReducer = combineReducers({
        common,
      });
      return combineReducer(state, action);
  }
}

export default rootReducer;