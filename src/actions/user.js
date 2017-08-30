
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken,
  };
}

export function login(name) {
  return (dispatch) => {
    setTimeout(() => dispatch(setAccessToken(name)), 1000);
  };
}

export function logout() {
  return (dispatch) => {
    setTimeout(() => dispatch(setAccessToken(null)), 1000);
  };
}
