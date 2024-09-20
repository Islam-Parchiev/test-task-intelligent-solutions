import { IResponseNode } from '../../types';
import type { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState: { items: IResponseNode[]; loading: boolean; } = {
    items: [],
    loading: false

}

export const repositoriesSlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<IResponseNode[]>) => {
            state.items = [];
            state.items = [...action.payload];
            console.log('slice', state.items);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
})
export const selectRepositories = (state: RootState) => state.search;

export const { addItems,setLoading } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;