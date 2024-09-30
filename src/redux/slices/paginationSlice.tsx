// import { Root } from '../../types';
// import type { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState: { count: number; page: number; rowsPerPage: number; } = {
    count: 100,
    rowsPerPage: 10,
    page: 10,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        // addRepo: (state, action: PayloadAction<Root>) => {
        //     state.data = null;
        //     state.data = { ...action.payload };
        //     console.log('addItem Succsess', state.data);
        // }
        // setLoading: (state, action: PayloadAction<boolean>) => {
        //     state.loading = action.payload;
        // }
        setPage: (state, action: PayloadAction<{
            event: React.MouseEvent<HTMLButtonElement> | null,
            newPage: number
        }>) => {
            state.page = action.payload.newPage;
            console.log('paginationSlice')
        },
        setRowsPerPage: (state, action: PayloadAction<number>) => {
            state.rowsPerPage = action.payload;
            state.page = 0;
            console.log('paginationSlice')
        }
    }
})
// export const selectPagination = (state: RootState) => state.;

export const { setPage, setRowsPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;