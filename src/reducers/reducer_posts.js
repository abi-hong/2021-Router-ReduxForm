import _ from "lodash";
import { fetchPosts, FETCH_POSTS } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
        return _.mapKeys(action.payload.datam 'id');
    default:
      return state;
  }
}
