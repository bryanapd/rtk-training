import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        return{
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdated(state, action) {
      //const { id, title, content } = action.payload
      const existingPost = state.posts.find(post => post.id == action.payload.id)
      if(existingPost){
        existingPost.title = action.payload.title
        existingPost.content = action.payload.content
      }
    }
  }
})

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await client.get('/fakeApi/posts')
//   return response.data
// })

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer