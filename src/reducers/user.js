
import { REHYDRATE } from 'redux-persist/constants';

import { SET_ACCESS_TOKEN } from '../actions/user';

const initialState = { 
  accessToken: null,
};

export default function(state = initialState, action) {
  if (action.type === SET_ACCESS_TOKEN) {
    return {
      ...state,
      accessToken: action.accessToken
    }
  }

  if (action.type === REHYDRATE) {
    const savedUser = action.payload.user || state;
    return {
      ...state,
      accessToken: savedUser.accessToken,
    };
  }

  return state;
};
