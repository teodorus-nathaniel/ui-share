import { combineReducers } from "redux";
import postReducer from "./post/post.reducer";
import savedPostsReducer from "./saved-posts/saved-posts.reducer";
import postDetailReducer from "./post-detail/post-detail.reducer";

const reducers = {
    post: postReducer,
    savedPosts: savedPostsReducer,
    postDetail: postDetailReducer
};

const rootReducer = combineReducers(reducers);

export type GlobalState = ReturnType<typeof rootReducer>;
export default rootReducer;
