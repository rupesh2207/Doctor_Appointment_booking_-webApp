import {configureStore} from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSclice';


export default configureStore({
    reducer: {
    alerts: alertSlice.reducer,
    }
});