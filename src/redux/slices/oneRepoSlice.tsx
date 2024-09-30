import { Root } from '../../types';
import type { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState: { data: Root | null; } = {
    data: null
}

export const oneRepoSLice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        addRepo: (state, action: PayloadAction<Root>) => {
            state.data = null;
            state.data = { ...action.payload };
            console.log('addItem Succsess', state.data);
        }
        // setLoading: (state, action: PayloadAction<boolean>) => {
        //     state.loading = action.payload;
        // }
    }
})
export const selectRepositories = (state: RootState) => state.search;

export const { addRepo } = oneRepoSLice.actions;
export default oneRepoSLice.reducer;