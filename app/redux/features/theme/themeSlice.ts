import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ThemeState {
  tabBarVisibility: boolean;
}

const initialState: ThemeState = {
  tabBarVisibility: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTabBarVisiblity: (state, action: PayloadAction<boolean>) => {
      state.tabBarVisibility = action.payload;
    },
  },
});

export const {setTabBarVisiblity} = themeSlice.actions;

// selectors
export const tabBarVisibilitySelector = (s: {theme: ThemeState}) => {
  return s.theme.tabBarVisibility;
};

export default themeSlice.reducer;
