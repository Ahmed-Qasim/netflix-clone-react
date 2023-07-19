import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    showSearch: boolean;
}

const initialState: SearchState = {
    showSearch: false,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        toggleSearch: (state) => {
            state.showSearch = !state.showSearch;
        },
    },
});

export const { toggleSearch } = searchSlice.actions;
export const selectSearchState = (state: any) => state.searchSlice.showSearch;
export default searchSlice.reducer;
