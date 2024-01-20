import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { END_POINT } from '@/app/config/EndPoint'

const token = localStorage.getItem("token")
let initialState = {
  isAuth:false,
  currentUser:null,
  tokenExt:0
}
console.log(token);

if(token){
  let decodedToken = jwtDecode(token) 
  if(decodedToken.exp * 1000 >= Date.now()){
      initialState = {
          isAuth:true,
          currentUser:{
              id:decodedToken.id,
              email:decodedToken.email,
              full_name:decodedToken.full_name,
              username:decodedToken.username,
              phone:decodedToken.phone
          },
          tokenExt:decodedToken.exp
      }
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      console.log(initialState);
  }else{
      localStorage.removeItem("token")
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // : 
  // {
  //   isAuth : false,
  //   currentUser: null,
  //   tokenExt: 0 
  // }
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem('token', action.payload.token)
      const decoded = jwtDecode(action.payload.token)
      state.currentUser = {
          id:decoded.id,
          email:decoded.email,
          full_name:decoded.full_name,
          username:decoded.username,
          phone:decoded.phone
      }
      state.isAuth = true

      state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false;
      state.currentUser = {};
      state.tokenExt = 0
      localStorage.removeItem("token")
    }
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut } = authSlice.actions

export const createUser = ( user ) => (dispatch) => {
  axios.post('http://195.49.210.193:3001/api/auth/signup', user)
  .then((response) => {
    // обработка успешного ответа
    console.log('Server response:', response.data);
  })
  .catch((error) => {
    // Обработка ошибки при отправке данных
    console.error('Error submitting form:', error);
  });
}

export const Login = (email, password) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signin`, {
      email, 
      password
  }).then(res => {
      // console.log(res.data);
      dispatch(authorize(res.data))

  })
}

export default authSlice.reducer