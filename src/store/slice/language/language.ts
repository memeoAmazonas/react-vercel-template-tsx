import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'language';
interface LanguageState {
  [name]: string;
}

const initialState: LanguageState = {
  language: localStorage.getItem('lang') || 'en',
};

export const LanguageSlice = createSlice({
  name,
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem('lang', payload);
      state.language = payload;
    },
  },
});
export const { setLanguage } = LanguageSlice.actions;
