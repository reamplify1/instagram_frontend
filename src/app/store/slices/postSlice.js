import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: []
    },
    reducers: {
        setMyPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        addMyPosts: (state, action) => {
            state.posts = [...state.posts, action.payload.newPost]
        }
    }
})
export const {setMyPosts, addMyPosts} = postSlice.actions

export const getMyPosts = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts:res.data}))
    } catch (error) {
        alert("error")
    }

}
export const createPost = (data) => async(dispatch) => {
    const res = axios.post('http://195.49.210.193:3001/api/post/newPost', data)
    dispatch(addMyPosts({newPost: res.data}))
    .then((response) => {
      // обработка успешного ответа
      console.log('Server response:', response.data);
    })
    .catch((error) => {
      // Обработка ошибки при отправке данных
      console.error('Error submitting post:', error);
    });
}