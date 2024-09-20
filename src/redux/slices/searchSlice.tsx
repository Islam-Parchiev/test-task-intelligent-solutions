import type { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// interface ISearchState {
//     value: string;
// }

const initialState: { value: string } = {
    value: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        resetValue: (state) => {
            state.value = '';
        }
    },
})
export const selectSearchValue = (state: RootState) => state.search;

export const { changeValue, resetValue } = searchSlice.actions;
export default searchSlice.reducer;