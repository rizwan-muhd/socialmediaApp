import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  storyViewModal: false,
  conversationId:"",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setOpenStoryView: (state, action) => {
      state.storyViewModal = action.payload;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setlogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setConversationId:(state,action) =>{
      state.conversationId = action.payload;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.log("user friends non existent :");
      }
    },
    setFollowing: (state, action) => {
      state.user = action.payload.user;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) {
          return action.payload.post;
        } else {
          return post;
        }
      });
      state.posts = updatedPosts;
    },
  },
});

export const {
  setMode,
  setLogin,
  setlogout,
  setFriends,
  setPosts,
  setPost,
  setOpenStoryView,
  setFollowing,
  setConversationId,
} = authSlice.actions;
export default authSlice.reducer;
