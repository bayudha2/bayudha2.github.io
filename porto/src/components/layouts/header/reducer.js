import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_about_active: false,
};

export const HeaderReducer = createSlice({
    name: 'header',
    initialState,
    reducers: {
        // eslint-disable-next-line max-len
        setActivateAbout: (state, action) => ({
            ...state,
            is_about_active: action.payload,
        }),
    },
});

export default HeaderReducer.reducer;
