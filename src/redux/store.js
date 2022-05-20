import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

// invocamos los reducers en el store
export default configureStore({
  reducer: {
    login : loginReducer,
  }
})