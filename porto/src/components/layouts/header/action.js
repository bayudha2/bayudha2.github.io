import { HeaderReducer } from './reducer';

export const setAbout = (item) => (dispatch) => {
    dispatch(HeaderReducer.actions.setActivateAbout(item));
};

export default setAbout;
