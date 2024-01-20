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
            // console.log('action',action);
            state.posts = [...state.posts, action.payload.newPost]
        },
        handleDeletedPost:(state, action) => {
            let posts = [...state.posts]
            posts = posts.filter(item => item.id !== action.payload)
        },
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
    // const res = axios.post('http://195.49.210.193:3001/api/post/newPost', data)
    axios.post('http://195.49.210.193:3001/api/post/newPost', data).then((res) => {
        // console.log("res", res);
        dispatch(addMyPosts({newPost: res.data}))
    })
    // console.log("res", res);
    // dispatch(addMyPosts({newPost: res.data}))
    // console.log(res.data);
    // .then((response) => {
    //   // обработка успешного ответа
    //   console.log('Server response:', response.data);
    // })
    // .catch((error) => {
    //   // Обработка ошибки при отправке данных
    //   console.error('Error submitting post:', error);
    // });
}

export const editPost = (data) => async(dispatch) =>{
    try {
        const res = await axios.put(`${END_POINT}/api/post/editPost`, data)
        dispatch(getMyPosts())
        // console.log('res' + res);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export const deletePost = (id) => async(dispatch) =>{
    try {
        const res = await axios.delete(`${END_POINT}/api/post/deletePostByID/${id}`)
        dispatch(handleDeletedPost(id))
        dispatch(getMyPosts())
        // console.log('res' + res);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export default postSlice.reducer
