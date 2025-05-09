import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import campaignSlice from './reducers/campaigns'; // Import the campaign slice reducer
import contributorSlice from './reducers/contributors'; // Import the campaign slice reducer

const rootReducer = combineReducers({
  campaigns: campaignSlice, 
  contributors : contributorSlice, // Import the contributors slice reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;