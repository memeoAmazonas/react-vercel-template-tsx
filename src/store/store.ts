import { configureStore } from '@reduxjs/toolkit';
import { LanguageSlice } from '~/intl';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducers = {
  reducer: {
    language: LanguageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
};
if (process.env.NODE_ENV === 'development') {
  rootReducers.middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(logger);
}

export const store = configureStore(rootReducers);
type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
