import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import search from './slices/searchSlice';
import oneRepo from './slices/oneRepoSlice';
import repositories from './slices/repositoriesSlice';
import pagination from './slices/paginationSlice';
export const store = configureStore({
    reducer: {
        search,
        repositories,
        oneRepo,
        pagination,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;